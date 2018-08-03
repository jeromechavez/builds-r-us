import React from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = {
  input: {
    width: '640px'
  },
  grid: {
    width: '830px',
    marginLeft: '10px'
  },
  gridInput: {
    height: '75px',
    width: '650px'
  },
  root: {
    marginTop: '20px'
  },
  header: {
    marginLeft: '20px'
  },
  banner: {
    width: '750px',
    height: '50px',
    backgroundImage: `url('./images/save-your-rig.png')`,
    backgroundRepeat: 'no-repeat'
  }
}

export default function BuildSave({ change, submit, saved, name, updated, overwrite }) {
  const defaultValue = (!name) ? '' : name
  return (
    <div style={styles.root}>
      <div style={styles.banner}></div>
      <Grid container wrap="wrap" alignItems="flex-end" spacing={8} style={styles.grid}>
        <Grid item xs={11} style={styles.gridInput}>
          <TextField id="name" label="Name" margin="normal" style={styles.input} value={defaultValue} onChange={change}></TextField>
        </Grid>
        <Grid item xs={1}>
          <Button id="button" variant="contained" disabled={updated} onClick={overwrite}>Update</Button>
          <Button id="button" variant="contained" disabled={saved} onClick={submit}>Save</Button>
        </Grid>
      </Grid>
    </div>
  )
}