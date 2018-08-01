import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = {
  input: {
    width: '50vw'
  },
  grid: {
    width: '64vw',
    margin: 'auto auto'
  },
  gridInput: {
    height: '75px',
    width: '650px'
  },
  root: {
    marginTop: '20px'
  }
}

export default function BuildSave({ change, submit, saved }) {
  return (
    <div style={styles.root}>
      <Typography variant="headline" align="center">Save your Rig</Typography>
      <Grid container wrap="wrap" alignItems="flex-end" spacing={8} style={styles.grid}>
        <Grid item xs={11} style={styles.gridInput}>
          <TextField id="name" label="Name" margin="normal" style={styles.input} onChange={change}></TextField>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" disabled={saved} onClick={submit}>Save</Button>
        </Grid>
      </Grid>
    </div>
  )
}