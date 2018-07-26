import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PartDetail from './part-detail'
import BuildParts from './build-parts'


const styles = {
  root: {
    flexGrow: 1,
    marginTop: '20px'
  },
  imageSize: {
    height: '180px',
    width: '250px',
    paddingTop: '10px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  header: {
    fontFamily: 'Roboto',
    width: '250px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
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
                <Card className="card" data-number={part.productId}>
                  <img src={part.imageURL} style={styles.imageSize} alt={part.name} />
                  <CardContent>
                    <h3 style={styles.header}>{part.name}</h3>
                    <Typography component="p">{part.brand}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={this.handleClick}>Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>

    )
  }
}