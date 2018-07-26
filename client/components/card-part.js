import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
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
export default function CardPart({ part, type, disabled, onClick, action }) {
  const subheaderType = (type === 'brand') ? part.brand : part.price
  const buttonAction = (action === 'build') ? 'Add to Build' : 'Learn More'
  return (
    <Card className="card" data-number={ part.productId }>
      <img src={ part.imageURL } style={ styles.imageSize } alt={ part.name }/>
      <CardContent>
        <h3 style={ styles.header }>{ part.name }</h3>
        <Typography component="p">{ '$' + subheaderType }</Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" disabled={ disabled } onClick={ onClick }>
          { buttonAction }
        </Button> 
      </CardActions>
    </Card>
  )
}