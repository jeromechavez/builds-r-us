import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import CardPart from './card-part'
import Grid from '@material-ui/core/Grid'

const styles = {
  root: {
    flexGrow: 1,
    marginTop: '50px',
    height: '700px'
  }
}

export default function EditGrid({ open, parts, addPart, onClose, disabled }) {
  return (
    <Drawer anchor="bottom" open={ open } scroll="paper" onClose={ onClose }>
      <div style={ styles.root }>
        <Grid container spacing={24}>
          { parts.map(part => (
            <Grid item xs={3} key={ part.productId }>
              <CardPart
                part={ part }
                type="price"
                disabled={ disabled }
                onClick={addPart}
                action="build" />
            </Grid>
          )) }
        </Grid>
      </div>
    </Drawer>
  )
}