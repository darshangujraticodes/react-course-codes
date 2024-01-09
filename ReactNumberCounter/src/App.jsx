import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Number should not go beyond 10
// number should not go below 0

function App() {

  let startNum = 10;
  let [counter, setCounter] = useState(startNum);
  
  function AddOne(){

    if ( counter < 10 ){
      counter = counter + 1;
      console.log(counter);
      setCounter(counter);
    }
    else{
      console.log('Number Beyond 10 is Not Allowed !!');
      setCounter(10);
    }

  }

  function SubtractOne(){
    if (counter <= 0){
      console.log('Number Below 0 is Not Allowed !!');
      setCounter(0);
    }
    else{
      counter = counter - 1;
      console.log(counter);
      setCounter(counter);
    }

  }

  return (
    <>
  
      <h1>Number Counter = {counter}</h1>
      <h3>Testing Bootstrap CSS Integration</h3>

      <button onClick={AddOne}>Add Value by 1</button>
      <button onClick={SubtractOne}>Subtract Value by 1</button>

    </>
  )
}

export default App
