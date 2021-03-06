import React, { Component } from 'react'
import List from "@material-ui/core/List"
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import RedditCard from './reddit-card'

const styles = {
  image: {
    width: '300px',
    height: '100px',
    backgroundImage: `url('./images/reddit-logo.png')`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    marginTop: '20px'
  },
  list: {
    width: '600px',
    height: '70vh',
    overflow: 'auto',
    marginTop: '20px'
  },
  intro: {
    width: '600px',
    margin: '20px'
  }
}

const urls = [
  'https://www.reddit.com/r/buildapcsales/new.json?limit=50', 
  'https://www.reddit.com/r/battlestations/hot.json?limit=50'
]

const message = 'Welcome to the Reddit section' 
                + ' of Builds R Us! This section is' 
                + ' designed for you to see what others'
                + ' are doing with computers. On the left, we have computer'
                + ' part sales if you want to find a deal and on '
                + 'the right are pictures of completed computer'
                + ' builds for you to get some inspiration from.'
                + ' All submitted by the people of Reddit!'

export default class RedditLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      battlestations: []
    }
  }

  componentDidMount() {
    const grabPosts = url => fetch(url)
      .then(res => res.ok && res.json())
      .then(data => data.data.children)
      .catch(err => console.error(err))
    
      Promise
        .all(urls.map(grabPosts))
        .then(data => this.setState({ posts: data[0], battlestations: data[1] }))
  }

  render() {
    const { posts, battlestations } = this.state
    return (
      <div>
        <div style={styles.image}></div>
        <Typography style={styles.intro}>{message}</Typography>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Typography variant="display1" color="primary" align="center">'/r/buildapcsales'</Typography>
            <List style={styles.list} component="nav">
              {posts.map(post => (
                <div key={post.data.id}>
                  <RedditCard post={post} />
                </div>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="display1" color="primary" align="center">'/r/battlestations'</Typography>
            <List style={styles.list} component="nav">
              {battlestations.map(station => (
                <div key={station.data.id}>
                  <RedditCard post={station} />
                </div>
              ))}
            </List>
          </Grid>
        </Grid>
      </div>

    )
  }
}