import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import styles from '../util/build-complete-styles'
import PopperCard from './popper-card'

export default class BuildMap extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      anchorEl: null,
      partType: null
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

  render() {
    const { anchorEl, partType } = this.state
    const build = this.props.parts
    
    return (
        <Paper style={styles.paper}>
          <PopperCard open={ Boolean(anchorEl) } anchorEl={ anchorEl } parts={ build } onClose={this.handleClose} type={ partType }/>
          <Button data-name="processor" variant="contained" color="secondary" onClick={this.handleClick} style={styles.processor}>CPU</Button>
          <Button data-name="motherboard" variant="contained" color="secondary" onClick={this.handleClick} style={styles.motherboard}>Motherboard</Button>
          <Button data-name="memory" variant="contained" color="secondary" onClick={this.handleClick} style={styles.memory}>Memory(RAM)</Button>
          <Button data-name="videocard" variant="contained" color="secondary" onClick={this.handleClick} style={styles.videocard}>Video Card</Button>
          <Button data-name="case" variant="contained" color="secondary" onClick={this.handleClick} style={styles.case}>Case</Button>
          <Button data-name="powersupply" variant="contained" color="secondary" onClick={this.handleClick} style={styles.powersupply}>Power Supply</Button>
          <Button data-name="cooling" variant="contained" color="secondary" onClick={this.handleClick} style={styles.cooling}>CPU Cooler</Button>
          <Button data-name="storage" variant="contained" color="secondary" onClick={this.handleClick} style={styles.storage}>Storage</Button>
        </Paper>
    )
  }
}