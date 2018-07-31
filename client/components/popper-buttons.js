import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

export default function PopperButtons({ onDelete, onEdit, part }) {
  if (part.name === 'Part not chosen.') {
    return <Button onClick={onEdit} color="secondary">Choose a Part</Button>
  } else {
    return (
      <div>
        <IconButton onClick={onEdit}><i className="material-icons">edit</i></IconButton>
        <IconButton onClick={onDelete} color="secondary"><i className="material-icons">delete</i></IconButton>
      </div>
    )
  }

}