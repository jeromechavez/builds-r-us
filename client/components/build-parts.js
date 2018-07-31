import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import CardPart from './card-part'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: '50px',
    height: '350px',
    overflowX: 'hidden'
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
    const { added, parts } = this.props
    const disabled = added ? true : false
    return (
      <div style={styles.root}>
        <Grid container spacing={24}>
          {parts.map(part => (
            <Grid item xs={3} key={part.productId}>
              <CardPart 
                part={ part } 
                type="price"
                disabled={ disabled }
                onClick={ this.handleClick }
                action="build"/>
            </Grid>
          ))}
        </Grid>
      </div>
    )
  }
}
