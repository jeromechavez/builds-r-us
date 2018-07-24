import React from 'react'
import Link from './link'

export default function PartFilter({ activeType }) {
  return (
    <div className="row mx-3">
      <ul className="nav flex-column nav-pills margin-top-page-spacing">
        <li className="nav-item">
          <Link
            path="parts"
            isActive={activeType === ''}> All </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'processor' }}
            isActive={activeType === 'processor'}>
            CPU Processors
          </Link>
        </li>
        <li className="nav-item">
          <Link 
            path="parts"
            params={{ type: 'cooling' }}
            isActive={activeType === 'cooling'}>
            CPU Coolers
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'motherboard' }}
            isActive={activeType === 'motherboard'}>
            Motherboards
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'case' }}
            isActive={activeType === 'case'}>
            Cases
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'memory' }}
            isActive={activeType === 'memory'}>
            Memory(RAM)
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'GPU' }}
            isActive={activeType === 'GPU'}>
            Video Cards
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'storage' }}
            isActive={activeType === 'storage'}>
            Storage
          </Link>
        </li>
        <li className="nav-item">
          <Link
            path="parts"
            params={{ type: 'powersupply' }}
            isActive={activeType === 'powersupply'}>
            Power Supplies
          </Link>
        </li>
      </ul>
    </div>
  )
}