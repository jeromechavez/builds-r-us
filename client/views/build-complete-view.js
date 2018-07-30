import React from 'react'
import BuildMap from '../components/build-map'

export default function BuildCompleteView({ parts }) {
  return (
    <div>
      <BuildMap parts={parts} />
    </div>

  )
}