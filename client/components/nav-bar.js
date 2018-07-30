import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Home from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/ToolBar'

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
        <ToolBar>
          <img src="./images/app-logo.png" style={styles.logo} />
          <IconButton color="inherit"><Home/></IconButton>
          <Button color="inherit" href="#parts">Parts</Button>
          <Button color="inherit" href="#build">Build A Rig</Button>
          <Button color="inherit" href="#buildcomplete">View Build</Button>
        </ToolBar>
      </AppBar>
  )
}