import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import styles from '../util/build-complete-styles'

export default function BuildMap({ isClicked }) {
  return (
    <Paper style={styles.paper}>
      <Button data-name="processor" variant="contained" color="secondary" onClick={isClicked} style={styles.processor}>CPU</Button>
      <Button data-name="motherboard" variant="contained" color="secondary" onClick={isClicked} style={styles.motherboard}>Motherboard</Button>
      <Button data-name="memory" variant="contained" color="secondary" onClick={isClicked} style={styles.memory}>Memory(RAM)</Button>
      <Button data-name="videocard" variant="contained" color="secondary" onClick={isClicked} style={styles.videocard}>Video Card</Button>
      <Button data-name="case" variant="contained" color="secondary" onClick={isClicked} style={styles.case}>Case</Button>
      <Button data-name="powersupply" variant="contained" color="secondary" onClick={isClicked} style={styles.powersupply}>Power Supply</Button>
      <Button data-name="cooling" variant="contained" color="secondary" onClick={isClicked} style={styles.cooling}>CPU Cooler</Button>
      <Button data-name="storage" variant="contained" color="secondary" onClick={isClicked} style={styles.storage}>Storage</Button>
    </Paper>
  )
}