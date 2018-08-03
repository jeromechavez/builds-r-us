import React from 'react'
import BuildComplete from '../components/build-complete'

export default function BuildCompleteView({ parts }) {
  return (
    <div>
      <BuildComplete parts={parts} />
    </div>
  )
}