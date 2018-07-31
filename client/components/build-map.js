import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import styles from '../util/build-complete-styles'
import PopperCard from './popper-card'
import EditGrid from './part-edit'

export default class BuildMap extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEditClose = this.handleEditClose.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.state = {
      anchorEl: null,
      partType: null,
      build: null,
      parts: [],
      showDrawer: false,
      added: false
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

  handleClick(event) {
    const { currentTarget } = event
    const type = currentTarget.dataset.name
    this.setState({ anchorEl: currentTarget, partType: type })
  }

  handleClose() {
    this.setState({ anchorEl: null})
  }

  handleEdit() {
    const { showDrawer, partType } = this.state

    const req = {
      method: 'GET',
      headers: { 'Content-Tipe': 'application/json' }
    }

    fetch('computer-parts/' + partType, req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ parts: data, showDrawer: !showDrawer }))
      .catch(err => console.error(err))

  }

  handleChange(event) {
    const { parts, build } = this.state
    const $card = event.target.closest('.card')
    if (!$card) return
    const number = parseInt($card.getAttribute('data-number'), 10)
    const part = parts.find(part => part.productId === number)
    this.setState({ build: this.setPart(build, part, part.type), added: true })
  }

  handleEditClose() {
    this.setState({ showDrawer: false, added: false})
  }

  handleDelete(event) {
    const { build } = this.state
    const $card = event.target.closest('.card')
    const type = $card.getAttribute('data-name')
    this.setState({ build: this.setPart(build, null, type) })
  }

  render() {
    const { anchorEl, partType, build, parts, showDrawer, added } = this.state
    
    return (
        <Paper style={styles.paper}>
          <PopperCard open={ Boolean(anchorEl) } anchorEl={ anchorEl } parts={ build }  onEdit={ this.handleEdit } onClose={this.handleClose} onDelete={ this.handleDelete } type={ partType }/>
          <Button data-name="processor" variant="contained" color="secondary" onClick={this.handleClick} style={styles.processor}>CPU</Button>
          <Button data-name="motherboard" variant="contained" color="secondary" onClick={this.handleClick} style={styles.motherboard}>Motherboard</Button>
          <Button data-name="memory" variant="contained" color="secondary" onClick={this.handleClick} style={styles.memory}>Memory(RAM)</Button>
          <Button data-name="videocard" variant="contained" color="secondary" onClick={this.handleClick} style={styles.videocard}>Video Card</Button>
          <Button data-name="case" variant="contained" color="secondary" onClick={this.handleClick} style={styles.case}>Case</Button>
          <Button data-name="powersupply" variant="contained" color="secondary" onClick={this.handleClick} style={styles.powersupply}>Power Supply</Button>
          <Button data-name="cooling" variant="contained" color="secondary" onClick={this.handleClick} style={styles.cooling}>CPU Cooler</Button>
          <Button data-name="storage" variant="contained" color="secondary" onClick={this.handleClick} style={styles.storage}>Storage</Button>
          <EditGrid open={showDrawer} parts={parts} addPart={ this.handleChange} disabled={added} onClose={this.handleEditClose} />
        </Paper>
    )
  }
}