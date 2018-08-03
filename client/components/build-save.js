import React from 'react'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

const styles = {
  input: {
    width: '80%'
  },
  root: {
    marginTop: '10px'
  },
  grid: {
    width: '400px',
    marginLeft: '10px'
  },
  gridInput: {
    height: '75px',
    width: '80%'
  },
  header: {
    marginLeft: '20px'
  },
  banner: {
    width: '400px',
    height: '50px',
    backgroundImage: `url('./images/save-rig.png')`,
    backgroundRepeat: 'no-repeat'
  }
}

export default function BuildSave({ change, submit, saved, name, buildId, deleteBuild }) {
  const action = (buildId) ? 'Update' : 'Save'
  const deleteActive = (buildId) ? false : true
  const defaultValue = (!name) ? '' : name
  return (
    <div style={styles.root}>
      <div style={styles.banner}></div>
      <Grid container wrap="wrap" alignItems="flex-end" spacing={8} style={styles.grid}>
        <Grid item xs={7} style={styles.gridInput}>
          <TextField id="name" label="Name" margin="normal" style={styles.input} value={defaultValue} onChange={change}></TextField>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" disabled={deleteActive} onClick={deleteBuild} color="secondary">Delete</Button>
          <Button variant="contained" disabled={saved} onClick={submit}>{action}</Button>
        </Grid>
      </Grid>
    </div>
  )
}