import React, {useState} from 'react'
import { postTrick } from '../../api'
import './Form.css'

function Form({addTrick}) {
  const [stance, setStance] = useState('')
  const [name, setName] = useState('')
  const [obstacle, setObstacle] = useState('')
  const [tutorial, setTutorial] = useState('')

  const handleClick = (event) => {
    event.preventDefault()
    postTrick({stance, name, obstacle, tutorial, id: Date.now()})
      .then(res => addTrick(stance, name, obstacle, tutorial))
      .catch(err => alert(err.message))
  }

  return (
    <form className='form--tricks'>
      <select className='form--stance' value={stance} onChange={event => setStance(event.target.value)} >
        <option value="" selected disabled hidden>Choose your Stance</option>
        <option value='regular'>Regular</option>
        <option value='switch'>Switch</option>
      </select>
      <input className='form--name' name='name' type='text' placeholder='Name of Trick' value={name} onChange={event => setName(event.target.value)}/>
      <select className='form--obstacle' value={obstacle} onChange={event => setObstacle(event.target.value)}>
        <option value="" selected disabled hidden>Choose your Obstacle</option>
        <option value='flat ground'>Flatground</option>
        <option value='ledge'>Ledge</option>
        <option value='rail'>Rail</option>
        <option value='stairs'>Stairs</option>
      </select>
      <input className='form--tutorial' name='tutorial' placeholder='Tutorial Link' type='text' value={tutorial} onChange={event => setTutorial(event.target.value)}/>
      <button className='form--send' type='submit' onClick={handleClick}>Send It!</button>
    </form>
  )
}

export default Form