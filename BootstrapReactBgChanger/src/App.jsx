import { useState } from 'react'
import PasswordGenerator from './components/PasswordGenerator';
import StopWatch from './components/StopWatch';


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
        style={ { backgroundColor:color, width:'100%', height:'900px'  } }
        >
      
      <h1 className='pt-5'>React BG Changer Project with Bootstrap CSS</h1>
      <div className=''>
        <a href="#" className='btn btn-primary mx-2' 
              onClick={setBlue} >Blue Button</a>

        <a href="#" className='btn btn-success mx-2' 
              onClick={setGreen}  >Green Button</a>

        <a href="#" className='btn btn-warning mx-2' 
              onClick={ () => setColor('#FFCA2C') }  >Yellow Button</a>

        <a href="#" className='btn btn-secondary mx-2' 
              style={ { backgroundColor:'#5C636A' } } 
              onClick={ () => setColor('#5C636A') }  >Gray Button</a>

        <a href="#" className='btn btn-secondary mx-2' 
              style={ { backgroundColor:'#f5f5f5', color:'#000' } } 
              onClick={ () => setColor('#f5f5f5') }  >Lavender Button</a>

      </div>

      <hr />

      <div className='password-wrapper ' >
        <PasswordGenerator  />
      </div>

      <hr />
     
     <div className='stopwatch-wrapper my-4'>
        <StopWatch />
     </div>

    </div>

  </>

  )
}

export default App
