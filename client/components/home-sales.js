import React, { Component } from 'react'
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    width: '100vw',
    height: '500px',
    overflow: 'auto'
  },
  image: {
    width: '600px',
    height: '200px',
    backgroundImage: `url('./images/reddit-logo.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  }
}

export default class HomeSales extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://www.reddit.com/r/buildapcsales/new.json')
      .then(res => res.ok && res.json())
      .then(data => {
        const posts = data.data.children
        this.setState({ posts: posts })
      })
      .catch(err => console.error(err))
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        <Grid container spacing={24} alignItems="flex-end">
          <Grid item xs={6}>
            <div style={styles.image}></div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="display2" color="secondary">'buildapcsales' subreddit</Typography>
          </Grid>
        </Grid>
        <div style={styles.root}>
          <List component="nav">
            {posts.map(post => (
              <ListItem button key={post.data.id} component="a" href={'https://www.reddit.com' + post.data.permalink}>
                <ListItemText>{post.data.title}</ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </div>

    )
  }
}