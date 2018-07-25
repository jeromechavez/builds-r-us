import React from 'react'
import PartsGrid from '../components/parts-grid.js'
import PartFilter from '../components/part-filter'

export default function GridView({ type, navigate, card}) {
  return (
    <div>
      <div className="row">
        <PartFilter/>
        <PartsGrid type={type} navigate={ navigate} card= {card}/>
      </div>
    </div>
  )
}