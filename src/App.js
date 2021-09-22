import {useState} from 'react'

import Header from "./Header.js"
import CountDisplay from './CountDisplay.js';
import Button from './Button.js';
import logo from './logo.svg';
import './App.css';


function App() {
  const [count, setCount] = useState(0)

  console.log("count", count)
  console.log("fcount", setCount)

  const handleIncrease = () => {
    setCount(count + 1)
  }


  const handleDecrease = () => {
    setCount(count - 1)
  }


  return (
    <div className = 'App'>
      <Header tittle="Hello React"/>

      {/*<p>Current count:{count}</p> */}
      <CountDisplay count = {count}/>
      {/*
      <button onClick = {handleIncrease}>Increase</button>
      <button onClick= {handleDecrease}>Decrease</button> */}

      <Button handleClick={handleIncrease} label='Increase' />
      <Button handleClick={handleDecrease} label='Decrease' />
    </div>
  )
}

export default App;
