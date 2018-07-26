import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Home from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import ToolBar from '@material-ui/core/ToolBar'

export default function NavBar(props) {
  return (
    <AppBar position="static">
      <ToolBar>
        <IconButton><Home/></IconButton>
      </ToolBar>
    </AppBar>
  )
}