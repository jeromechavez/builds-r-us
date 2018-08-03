import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PopperCard from './popper-card'
import EditGrid from './part-edit'
import BuildSave from './build-save'
import BuildList from '../components/build-list'
import BuildMap from './build-map'
import styles from '../util/build-complete-styles'

const req = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' }
}
export default class BuildComplete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      partType: null,
      build: null,
      buildName: null,
      buildId: null,
      buildList: [],
      parts: [],
      showDrawer: false,
      added: false,
      saved: true,
      updated: true,
      listUpdate: false
    }
  }

  componentDidMount() {
    const { parts } = this.props
    this.setState({ build: parts })

    fetch('builds/', req)
      .then(res => res.ok && res.json())
      .then(builds => this.setState({ buildList: builds }))
      .catch(err => console.error(err))
  }

  componentDidUpdate() {
    const { listUpdate } = this.state
    if (listUpdate) {
      fetch('builds/', req)
        .then(res => res.ok && res.json())
        .then(builds => this.setState({ buildList: builds, listUpdate: false }))
        .catch(err => console.error(err))
    }
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
      .then(data => this.setState({ parts: data, showDrawer: !showDrawer, added: false }))
      .catch(err => console.error(err))

  }

  handleChange = (event) => {
    const { parts, build } = this.state
    const $card = event.target.closest('.card')
    if (!$card) return
    const number = parseInt($card.getAttribute('data-number'), 10)
    const part = parts.find(part => part.productId === number)
    this.setState({ build: this.setPart(build, part, part.type), added: true, saved: false, showDrawer: false })
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
    const { build, buildName, buildId } = this.state
    if (!build) return null
    const reqBody = Object.assign({build}, {buildName: buildName})
    if (buildId) {
      const req = {
        method: 'PUT',
        body: JSON.stringify(reqBody),
        headers: { 'Content-Type': 'application/json' }
      }

      fetch(`builds/${buildId}`, req)
        .then(res => res.ok ? res.json() : null)
        .then(updatedBuild => {
          this.setState({ build: updatedBuild.build, saved: true, listUpdate: true }
          )
        })
        .then(() => alert('Build Updated!'))
        .catch(err => console.error(err))
    } 
    else {
      const req = {
        method: 'POST',
        body: JSON.stringify(reqBody),
        headers: { 'Content-Type': 'application/json' }
      }

      fetch('builds/save/', req)
        .then(res => res.ok ? res.json() : null)
        .then(() => this.setState({ saved: true, listUpdate: true }))
        .then(() => alert('Build Saved!'))
        .catch(err => console.error(err))
    }
  }

  handleDeleteBuild = () => {
    const { buildId } = this.state
    const req = { method: 'DELETE' }
    fetch(`builds/${buildId}` , req)
      .then(res => res.ok ? this.setState({buildId: null, build: null, buildName: null, listUpdate: true }) : null)
      .then(() => alert('Build Deleted!'))
      .catch(err => console.error(err))
  }

  handleInputChange = (event) => {
    const { value } = event.target
    this.setState({buildName: value, saved: false})
  }

  handleSetBuild = (build) => {
    this.setState({ build: build.build, buildId: build.buildId, buildName: build.buildName })
  }

  render() {
    const { anchorEl, partType, build, parts, showDrawer, added, saved, buildName, updated, buildList, buildId } = this.state
    
    return (
      <div>
        <Grid container justify="flex-start" spacing={24}>
          <Grid item xs={8}>
            <div style={styles.banner}></div>
            <BuildMap isClicked={this.handleClick} />
          </Grid>
          <Grid item xs={4}>
            <BuildSave change={this.handleInputChange} submit={this.handleSave} deleteBuild={this.handleDeleteBuild} name={buildName} buildId={buildId} updated={updated} saved={saved}/>
            <BuildList setBuild={this.handleSetBuild} list={buildList} />
          </Grid>
          <PopperCard open={Boolean(anchorEl)} anchorEl={anchorEl} parts={build} onEdit={this.handleEdit} onClose={this.handleClose} onDelete={this.handleDelete} type={partType} />
          <EditGrid open={showDrawer} parts={parts} addPart={this.handleChange} disabled={added} onClose={this.handleEditClose} />
        </Grid>
      </div>
    )
  }
}