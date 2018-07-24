import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

export default function PartsGrid(props) {
  const { parts } = props
  return (
    <div className="root list-filters gridList">
      <div className="row">
        { parts.map(part => (
          <div key={ part.productId } className="card card-width shadow-lg border-0 mx-1 my-1">
            <img src={ part.imageURL } className="card-img-top mx-auto my-2 imageSize" alt={ part.name } />
            <div className="card-body text-dark">
                <h5 className="card-title">{ part.name }</h5>
                <p className="card-text">{ part.brand }</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}