import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

export default function PartsGrid(props) {
  const { parts } = props
  return (
    <div className="root">
      <GridList cellHeight= { 180 } className="gridList">
        { parts.map(part => (
          <GridListTile key={ part.productId } className="mx-2" cols={ 0.60 } >
            <img src={ part.imageURL } className="imageSize" alt={ part.name } />
            <GridListTileBar
              title={ part.name }
              subtitle={ part.brand }>
            </GridListTileBar>
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}