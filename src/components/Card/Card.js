import React from 'react'
import './Card.css'
import { deleteTrick } from '../../api'

function Card({stance, name, obstacle, tutorial, id, removeTrick}) {
  const handleClick = (event) => {
    deleteTrick(event.target.id)
      .then(res => removeTrick(id))
  }
  
  return (
    <div className='card' >
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a><br/>
      <button id={id} className='delete' onClick={handleClick}>X</button>
    </div>
  )
}

export default Card