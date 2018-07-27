import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiDrawer: {
      paper: {
        display: 'block'
      }
    }
  }
})

const styles = {
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  table: {
    width: '500px',
    display: 'block',
    margin: 'auto',
    top: '0'
  },
  totalPrice: {
    fontFamily: 'Roboto',
    textAlign: 'right',
    paddingRight: '20px'
  },
  image: {
    width: '500px',
    height: '330px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'gray',
    backgroundImage: `url('./images/wizard-header.png')`
  }
}

export default function CurrentBuild({ open, onClose, build }) {
  if (build.length === 0) return null
  const totalPrice = build.reduce((acc, part) => acc + part.price, 0)
  return (
    <MuiThemeProvider theme={ theme} >
      <Drawer anchor="right" open={ open } onClose= { onClose }>
      <div style={styles.table}>
        <div style={styles.image}></div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={ styles.header }>Part Name</TableCell>
              <TableCell style={ styles.header }>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {build.map((part, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{part.brand + ' ' + part.name + ` (${part.type})`}</TableCell>
                  <TableCell>{'$' + parseFloat(part.price)}</TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
        <h3 style={styles.totalPrice}>Total Price: ${parseFloat(totalPrice)}</h3>
        </div>
      </Drawer>
    </MuiThemeProvider>
  )
}