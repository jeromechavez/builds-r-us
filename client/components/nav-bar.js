import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

const styles = {
  root: {
    backgroundColor: 'black'
  },
  logo: {
    width: '150px',
    height: '40px',
  }
}

export default function NavBar(props) {
  return (
      <AppBar position="static" style={ styles.root }>
        <Toolbar>
          <Button color="inherit" href="#home"><img src="./images/app-logo.png" style={styles.logo} /></Button>
          <Button color="inherit" href="#parts">Parts</Button>
          <Button color="inherit" href="#build">Build A Rig</Button>
          <Button color="inherit" href="#buildcomplete">View Build</Button>
        </Toolbar>
      </AppBar>
  )
}