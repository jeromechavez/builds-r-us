import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'

const styles = {
  card: {
    display: 'flex',
    width: '500px'
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
    backgroundSize: 'contain',
    marginRight: '20px'
  },
  controls: {
    display: 'flex',    
    alignItems: 'left',
    paddingLeft: '10px',
    paddingBottom: '10px'
  },
  icon: {
    cursor: 'pointer'
  }
}

export default function PopperCard({ open, anchorEl, onClose, parts, type, onEdit, onDelete }) {
  if (!parts) return null
  if (!type) return null
  const part = !parts[type]
    ? { type: type, name: 'Part not chosen.', brand: 'N/A', price: 0, imageURL: 'https://vignette.wikia.nocookie.net/rokuaka/images/f/fc/No_picture_available.png/revision/latest?cb=20170724164915'}
    : parts[type]
  return (
    <div>
      <Popover open={open} anchorEl={anchorEl} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }} onClose={onClose}>
      <Card className="card" data-name={part.type} style={ styles.card }>
        <div style={ styles.details }>
          <CardContent style={ styles.content }>
            <Typography variant="headline">{ part.name }</Typography>
            <Typography variant="subheading" color="textSecondary">{ part.brand }</Typography>
            <Typography variant="subheading" color="secondary">{ '$' + part.price.toFixed(2) }</Typography>
          </CardContent>
          <div style={ styles.controls }>
              <IconButton onClick={onEdit}><i className="material-icons">edit</i></IconButton>
              <IconButton onClick={onDelete} color="secondary"><i className="material-icons">delete</i></IconButton>
          </div>
        </div>
        <div style={styles.container}>
            <CardMedia style={styles.cover} image={part.imageURL} />
        </div>
      </Card>
      </Popover>
    </div>
  )
}