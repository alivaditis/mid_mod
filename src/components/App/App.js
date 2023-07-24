import './App.css';
import React, {useState, useEffect} from 'react';
import Form from '../Form/Form'
import Tricks from '../Tricks/Tricks'

function App() {
  const[tricks, setTricks] = useState([])
  
  function addTrick(stance, name, obstacle, tutorial) {
    setTricks([...tricks, {stance, name, obstacle, tutorial, id: Date.now()}])
  }

  return (
    <div className="App">
      <h1>Sick Trick Wish List</h1>
      <Form addTrick={addTrick}/>
      <Tricks tricks={tricks} setTricks={setTricks}/>
    </div>
  );
}

export default App; 
