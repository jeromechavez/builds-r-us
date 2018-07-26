import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: '50px',
    height: '350px',
    overflowX: 'hidden'
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

export default class BuildParts extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    const $card = event.target.closest('.card')
    if (!$card) return
    const number = parseInt($card.getAttribute('data-number'), 10)
    this.props.onAdd(number)
  }
  render() {
    const { added } = this.props
    const disabled = added ? true : false
    return (
      <div style={styles.root}>
        <Grid container spacing={24}>
          {this.props.parts.map(part => (
            <Grid item xs={3} key={part.productId}>
              <Card className="card" data-number={part.productId}>
                <img src={part.imageURL} style={styles.imageSize} alt={part.name} />
                <CardContent>
                  <h3 style={styles.header}>{part.name}</h3>
                  <Typography component="p">{'$' + part.price}</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" disabled={disabled} onClick={this.handleClick} color="primary">Add To Build</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}
