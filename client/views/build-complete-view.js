import React from 'react'
import BuildMap from '../components/build-map'

const styles = {
  banner: {
    width: '750px',
    height: '50px',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url('./images/your-rig.png')`
  }
}

export default function BuildCompleteView({ parts }) {
  return (
    <div>
      <div style={styles.banner}></div>
      <BuildMap parts={parts} />
    </div>
  )
}