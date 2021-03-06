import React from 'react'
import Button from '@material-ui/core/Button'

const styles = {
  current: {
    margin: 'auto 10px'
  }
}

export default function BuildButtons({ activeStep, onBack, onNext, disabled, steps, showBuild }) {
  const buttonLabel = (activeStep === steps.length - 1) ? 'Finish' : 'Next'
  return (
    <div>
      <Button disabled={activeStep === 0 } onClick={ onBack }>Back</Button>
      <Button variant="contained" color="primary" disabled={ disabled } onClick={ onNext }>
        { buttonLabel }
      </Button>
      <Button variant="contained" style={styles.current} color="primary" onClick={ showBuild }>Current Build</Button>
    </div>
  )
}