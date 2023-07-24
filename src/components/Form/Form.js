import React, {useState, useEffect} from 'react'
import './Form.css'

function Form({addTrick}) {
  const [stance, setStance] = useState('')
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    addTrick(stance, name, obstacle, tutorial)
  }

  return (
    <form className='form--tricks'>
      <select className='form--stance' value={stance} onChange={event => setStance(event.target.value)} >
        <option value="" selected disabled hidden>Choose your Stance</option>
        <option value='Regular'>Regular</option>
        <option value='Switch'>Switch</option>
      </select>
      <input className='form--name' name='name' type='text' placeholder='Name of Trick' value={name} onChange={event => setName(event.target.value)}/>
      <select className='form--obstacle' value={obstacle} onChange={event => setObstacle(event.target.value)}>
        <option value="" selected disabled hidden>Choose your Obstacle</option>
        <option value='Flatground'>Flatground</option>
        <option value='Ledge'>Ledge</option>
        <option value='Rail'>Rail</option>
        <option value='Stairs'>Stairs</option>
      </select>
      <input className='form--tutorial' name='tutorial' placeholder='Tutorial Link' type='text' value={tutorial} onChange={event => setTutorial(event.target.value)}/>
      <button className='form--send' type='submit' onClick={handleClick}>Send It!</button>
    </form>
  )
}

export default Form