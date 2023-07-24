import React, {useState, useEffect} from 'react'
import './Card.css'

function Card({stance, name, obstacle, tutorial, id}) {
  return (
    <div className='card'>
      <p>{stance} {name}</p>
      <p>Obstacle: {obstacle}</p>
      <p>Link to Tutorial:</p>
      <a href={tutorial}>{tutorial}</a>
    </div>
  )
}

export default Card