import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import PopperCard from './popper-card'
import EditGrid from './part-edit'
import BuildSave from './build-save'
import BuildList from '../components/build-list'
import styles from '../util/build-complete-styles'

export default class BuildMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      partType: null,
      build: null,
      buildName: null,
      parts: [],
      showDrawer: false,
      added: false,
      saved: true 
    }
  }

  componentDidMount() {
    const { parts } = this.props
    this.setState({ build: parts })
  }

  setPart(build, part, type) {
    if (!part) {
      return {
        ...build,
        [type]: null
      }
    } else {
      return {
        ...build,
        [type]: part
      }
    }

  }

  handleClick = (event) => {
    const { currentTarget } = event
    const type = currentTarget.dataset.name
    this.setState({ anchorEl: currentTarget, partType: type })
  }

  handleClose = () => {
    this.setState({ anchorEl: null})
  }

  handleEdit = () => {
    const { showDrawer, partType } = this.state

    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('computer-parts/' + partType, req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ parts: data, showDrawer: !showDrawer }))
      .catch(err => console.error(err))

  }

  handleChange = (event) => {
    const { parts, build } = this.state
    const $card = event.target.closest('.card')
    if (!$card) return
    const number = parseInt($card.getAttribute('data-number'), 10)
    const part = parts.find(part => part.productId === number)
    this.setState({ build: this.setPart(build, part, part.type), added: true })
  }

  handleEditClose = ()  => {
    this.setState({ showDrawer: false, added: false})
  }

  handleDelete = (event) => {
    const { build } = this.state
    const $card = event.currentTarget.closest('.card')
    const type = $card.getAttribute('data-name')
    this.setState({ build: this.setPart(build, null, type) })
  }

  handleSave = () => {
    const { build, buildName } = this.state
    if (!build) return null
    const reqBody = Object.assign({build}, {buildName: buildName})
    const req = {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: { 'Content-Type': 'application/json'}
    }

    fetch('computer-parts/save', req)
      .then(res => res.ok ? res.json() : null)
      .then(() => this.setState({ saved: true }))
      .then(() => alert('Build Saved!'))
      .catch(err => console.log(err))
  }

  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({buildName: value, saved: false})
  }

  handleSetBuild = (build) => {
    this.setState({ build: build })
  }

  render() {
    const { anchorEl, partType, build, parts, showDrawer, added, saved } = this.state
    
    return (
      <div>
        <div style={styles.container}>
          <Paper style={styles.paper}>
            <PopperCard open={Boolean(anchorEl)} anchorEl={anchorEl} parts={build} onEdit={this.handleEdit} onClose={this.handleClose} onDelete={this.handleDelete} type={partType} />
            <Button data-name="processor" variant="contained" color="secondary" onClick={this.handleClick} style={styles.processor}>CPU</Button>
            <Button data-name="motherboard" variant="contained" color="secondary" onClick={this.handleClick} style={styles.motherboard}>Motherboard</Button>
            <Button data-name="memory" variant="contained" color="secondary" onClick={this.handleClick} style={styles.memory}>Memory(RAM)</Button>
            <Button data-name="videocard" variant="contained" color="secondary" onClick={this.handleClick} style={styles.videocard}>Video Card</Button>
            <Button data-name="case" variant="contained" color="secondary" onClick={this.handleClick} style={styles.case}>Case</Button>
            <Button data-name="powersupply" variant="contained" color="secondary" onClick={this.handleClick} style={styles.powersupply}>Power Supply</Button>
            <Button data-name="cooling" variant="contained" color="secondary" onClick={this.handleClick} style={styles.cooling}>CPU Cooler</Button>
            <Button data-name="storage" variant="contained" color="secondary" onClick={this.handleClick} style={styles.storage}>Storage</Button>
            <EditGrid open={showDrawer} parts={parts} addPart={this.handleChange} disabled={added} onClose={this.handleEditClose} />
          </Paper>
          <BuildList setBuild={this.handleSetBuild}/>
        </div>
        <BuildSave change={this.handleInputChange} submit={this.handleSave} saved={ saved }/>
      </div>
    )
  }
}