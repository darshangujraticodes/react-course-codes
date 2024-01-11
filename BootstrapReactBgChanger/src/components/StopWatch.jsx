import { useRef, useState } from "react"

export default function StopWatch(){

    const [startTime, setStartTime] = useState(null)
    const [now, setNowTime] = useState(null) 
    const intervalRef = useRef(null)

    function watchStart(){
        setStartTime(Date.now())
        setNowTime(Date.now())

        // console.log(Date.now())
       clearInterval(intervalRef.current);
       intervalRef.current = setInterval( () => setNowTime(Date.now()), 10 )
    }

    function watchStop(){
        clearInterval(intervalRef.current)
    }
  

    function watchRestart(){
        setStartTime(null)
    }

    let secondPassed = 0;
    if ( startTime != null && now != null){
        secondPassed = (now - startTime) / 1000
        console.log(secondPassed)
    }
    
 

    return (
        <div className="stopwatch-wrapper my-4">
            <h2>Timer</h2>
            <h3>{secondPassed.toFixed(3)}</h3>

            <div className="my-3">
                <button type="button" 
                        className="btn btn-primary mx-2"
                        onClick={watchStart}    >START</button>
                
                <button type="button" 
                        className="btn btn-primary mx-2"
                        onClick={watchStop} >STOP</button>

                <button type="button" 
                        className="btn btn-primary mx-2"
                        onClick={watchRestart} >RESTART</button>
            </div>
        </div>
    )
}