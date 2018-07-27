import React from 'react'
import BuildWizard from '../components/build-wizard'

//  backgroundImage: `url('https://cdn.pcpartpicker.com/static/forever/images/userbuild/172091.0573f9c4744ed475b597e80f8a7ce8c5.7ac0eaa079c44247927b0f0ce25ad3b8.1600.jpg')`

const styles = {
  header: {
    height: '500px',
    width: '100%',
    backgroundColor: 'gray',
    backgroundImage: `url('./images/wizard-header.png')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },
  stretch: {
    marginRight: '-5%',
    marginLeft: '-5%'
  }
}

export default function BuildView() {
  return (
    <div>
      <div style={styles.stretch}>
        <div style={styles.header}></div>
      </div>
      <BuildWizard />
    </div>
  )
}