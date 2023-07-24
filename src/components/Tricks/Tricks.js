import React, {useState, useEffect} from 'react'
import { getTricks } from '../../api'
import Card from '../Card/Card'
import './Tricks.css'

function Tricks() {
  const[tricks, setTricks] = useState([])
  useEffect(() => {
    getTricks()
      .then(data => setTricks(data))
      .catch(err => alert(err.message))
  }, [])

  return (
    <div className='tricks'>
      {tricks.map(trick => <Card {...trick} key={trick.id}/>)}
    </div>
  )
}

export default Tricks