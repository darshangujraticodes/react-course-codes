import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [color, setColor] = useState('#f5f5f5');

  function setBlue(){
    setColor('#0B5ED7');
  }

  function setGreen(){
    setColor('#157347');
  }


  return (
  
  < >
    <div 
        className='text-center' 
        style={ { backgroundColor:color, width:'100%', height:'1000px'  } }
        >
      
      <h1 className='pt-5'>React BG Changer Project with Bootstrap CSS</h1>
      <div className='my-4'>
        <a href="#" className='btn btn-primary mx-2' 
              onClick={setBlue} >Blue Button</a>

        <a href="#" className='btn btn-success mx-2' 
              onClick={setGreen}  >Green Button</a>

        <a href="#" className='btn btn-warning mx-2' 
              onClick={ () => setColor('#FFCA2C') }  >Yellow Button</a>

        <a href="#" className='btn btn-secondary mx-2' 
              style={ { backgroundColor:'#5C636A' } } 
              onClick={ () => setColor('#5C636A') }  >Gray Button</a>

      </div>
    </div>
     
  </>

  )
}

export default App
