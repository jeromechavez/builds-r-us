import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import ListItem from '@material-ui/core/ListItem'

const styles = {
  card: {
    display: 'flex',
    width: '600px'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  container: {
    height: '100px',
    width: '100px',
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
    paddingLeft: '25px',
    paddingBottom: '10px'
  }
}

export default function RedditCard({ post }) {
  return (
    <ListItem button component="a" href={post.data.url} >
      <Card className="card" style={styles.card}>
        <div style={styles.details}>
          <CardContent style={styles.content}>
            <Typography variant="subheading">{post.data.title}</Typography>
            <Typography variant="body2" color="textSecondary">{post.data.domain}</Typography>
          </CardContent>
          <div style={styles.controls}>
            <Typography variant="subheading" color="primary">{post.data.author}</Typography>
          </div>
        </div>
      </Card>
    </ListItem>

  )
}