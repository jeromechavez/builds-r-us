import React from 'react'
import PartsGrid from '../components/parts-grid.js'
import PartFilter from '../components/part-filter'

const styles = {
  stretch: {
    marginRight: '-1%',
    marginLeft: '-1%'
  }
}

export default function GridView({ type }) {
  return (
    <div>
      <div style={styles.stretch}>
        <PartFilter/>
      </div>
      <PartsGrid type={type}/>
    </div>
  )
}