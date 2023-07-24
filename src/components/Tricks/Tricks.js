import React, {useEffect} from 'react'
import { getTricks } from '../../api'
import Card from '../Card/Card'
import './Tricks.css'

function Tricks({tricks, setTricks, removeTrick}) {
  useEffect(() => {
    getTricks()
      .then(data => setTricks(data))
      .catch(err => alert(err.message))
  }, [])

  return (
    <div className='tricks'>
      {tricks.map(trick => <Card {...trick} key={trick.id}  removeTrick={removeTrick}/>)}
    </div>
  )
}

export default Tricks