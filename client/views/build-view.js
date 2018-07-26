import React from 'react'
import BuildWizard from '../components/build-wizard'

const styles = {
  header: {
    width: '100%',
    height: '400px',
    textAlign: 'center',
    backgroundColor: 'gray',
    backgroundImage: `url('https://cdn.pcpartpicker.com/static/forever/images/userbuild/172091.0573f9c4744ed475b597e80f8a7ce8c5.7ac0eaa079c44247927b0f0ce25ad3b8.1600.jpg')`
  }
}

export default function BuildView() {
  return (
    <div>
      <div style={ styles.header }></div>
      <BuildWizard/>
    </div>
    
  )
}