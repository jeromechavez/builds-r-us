import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

const styles = {
  menuItem: {
    width: '200px'
  },
  root: {
    position: 'absolute',
    top: '20px',
    left: '70%'
  }
}

export default class BuildList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null,
      builds: []
    }
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('computer-parts/save/builds', req)
      .then(res => res.ok && res.json())
      .then(builds => this.setState({ builds: builds }))
      .catch(err => console.error(err))
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleShowSavedBuild = (event) => {
    const { builds } = this.state
    const { currentTarget } = event
    const buildName = currentTarget.dataset.name
    const savedBuild = builds.find(build => build.buildName === buildName)
    this.props.setBuild(savedBuild.build)
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl, builds } = this.state
    if (builds.length === 0) return null
    return (
      <div style={styles.root}>
        <Button variant="contained" onClick={this.handleClick}>Builds</Button>
        <Menu
          id="build-list"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          { builds.map( build => (
            <MenuItem className="item" key={build.buildId} data-name={build.buildName} onClick={this.handleShowSavedBuild} style={styles.menuItem}>{build.buildName}</MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}