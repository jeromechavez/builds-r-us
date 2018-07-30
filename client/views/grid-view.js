import React from 'react'
import PartsGrid from '../components/parts-grid.js'
import PartFilter from '../components/part-filter'

const styles = {
  stretch: {
    width: '100vw'
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