import React from 'react'
import Modal from '@material-ui/core/Modal'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = {
  modal: {
    width: '600px',
    height: '950px',
    backgroundColor: 'white',
    display: 'block',
    margin: '50px auto'
  },
  imageSize: {
    width: '500px',
    height: '300px',
    display: 'block',
    paddingTop: '50px',
    margin: '10px auto'
  },
  table: {
    width: '500px',
    display: 'block',
    margin: 'auto'
  },
  header: {
    backgroundColor: 'black',
    color: 'white'
  },
  title: {
    fontFamily: 'Roboto',
    textAlign: 'center'
  }
}

export default function PartDetail({ open, part, onClose}) {
  if (!part) return null
  const { specs } = part
  return (
    <Modal open={ open } onClose={ onClose } >
      <Paper style= { styles.modal }>
        <img src={part.imageURL} style={styles.imageSize} />
        <div style={styles.title}>
          <h2>{'Name: ' + part.name}</h2>
          <h3>{'Brand: ' + part.brand}</h3>
          <h3>{'Price: $' + part.price}</h3>
        </div>
        <Paper style={styles.table}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={styles.header}>Specs</TableCell>
                <TableCell style={styles.header}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              { specs.map((part, index) => {
                return (
                  <TableRow key={ index }>
                    <TableCell>{ part.specName }</TableCell>
                    <TableCell>{ part.specValue }</TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </Paper>
      </Paper>
    </Modal>
  )
}