import React from 'react'
import PartsGrid from '../components/parts-grid.js'
import PartFilter from '../components/part-filter'

export default function GridView({ type }) {
  return (
    <div>
      <div className="row">
        <PartFilter/>
        <PartsGrid type={type}/>
      </div>
    </div>
  )
}