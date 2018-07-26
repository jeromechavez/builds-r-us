import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'


export default function ResetButton({ onClick }) {
  return (
    <div>
      <Typography>All steps completed - you&quot;re finished!</Typography>
      <Button onClick={ onClick }>Reset</Button>
    </div>
  )
}