import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const styles = {
  card: {
    display: 'flex',
    width: '400px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  container: {
    height: '200px',
    width: '200px',
    marginLeft: 'auto'
  },
  cover: {
    width: '100%',
    height: '100%',
    backgroundSize: 'contain'
  }
}

export default function PopperCard({ open, anchorEl, onClose, parts, type }) {
  if (!parts) return null
  if (!type) return null
  const part = parts[type]
  return (
    <div>
      <Popover open={open} anchorEl={anchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }} onClose={onClose}>
      <Card style={ styles.card }>
        <div style={ styles.details }>
          <CardContent style={ styles.content }>
            <Typography variant="headline">{ part.name }</Typography>
            <Typography variant="subheading" color="textSecondary">{ part.brand }</Typography>
            <Typography variant="subheading" color="secondary">{ '$' + part.price.toFixed(2) }</Typography>
          </CardContent>
        </div>
        <div style={styles.container}>
            <CardMedia style={styles.cover} image={part.imageURL} />
        </div>
      </Card>
      </Popover>
    </div>
  )
}