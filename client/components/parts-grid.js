import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import PartDetail from './part-detail'
import CardPart from './card-part'


const styles = {
  root: {
    flexGrow: 1,
    marginTop: '20px'
  }
}

export default class PartsGrid extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      parts: [],
      part: null,
      open: false
    }
  }

  componentDidMount() {
    const req = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }

    fetch('/computer-parts', req)
      .then(res => res.ok && res.json())
      .then(data => this.setState({ parts: data }))
      .catch(err => console.error(err))
  }

  handleClick(event) {
    const $card = event.target.closest('.card')
    if (!$card) return
    const number = parseInt($card.getAttribute('data-number'), 10)
    const part = this.state.parts.find(part => part.productId === number)
    this.setState({ open: true, part: part})
  }

  handleClose() {
    this.setState({ open: false })
  }

  render() {
    const { type } = this.props
    const { parts, open, part } = this.state
    const filteredParts = type
      ? parts.filter(part => part.type === type)
      : parts
    return (
      <div>
        <PartDetail open={open} part={part} onClose={this.handleClose} />
        <div style={styles.root}>
          <Grid container spacing={24}>
            {filteredParts.map(part => (
              <Grid item xs={3} key={part.productId}>
                <CardPart
                  part={ part }
                  type="brand"
                  onClick={ this.handleClick }
                  action="learn"/>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    )
  }
}