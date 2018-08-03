import React, { Component } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'

const styles = {
  menuItem: {
    width: '200px'
  },
}

export default class BuildList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorEl: null
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleShowSavedBuild = (event) => {
    const { currentTarget } = event
    const { list } = this.props
    const buildName = currentTarget.dataset.name
    const savedBuild = list.find(build => build.buildName === buildName)
    this.props.setBuild(savedBuild)
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state
    const { list } = this.props
    if (list.length === 0) return null
    return (
      <div style={styles.root}>
        <Button variant="contained" onClick={this.handleClick}>Builds</Button>
        <Menu
          id="build-list"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          { list.map( build => (
            <MenuItem className="item" key={build.buildId} data-name={build.buildName} onClick={this.handleShowSavedBuild} style={styles.menuItem}>{build.buildName}</MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}