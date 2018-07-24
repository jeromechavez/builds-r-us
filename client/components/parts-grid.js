import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

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
    fontFamily: 'Roboto'
  }
}

export default function PartsGrid(props) {
  const { parts } = props
  return (
    <div style={ styles.root }>
      <Grid container spacing={ 24 }>
        { parts.map(part => (
          <Grid item xs={3} key={ part.productId }>
            <Card>
              <img src={ part.imageURL } style={ styles.imageSize } alt={ part.name } />
              <CardContent>
                <h4 style={styles.header}>{ part.name }</h4>
                <Typography component="p">{ part.brand }</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}