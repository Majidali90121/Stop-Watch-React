import './Practice.css'
import {useState,useEffect} from 'react'
function Practice(){
    const [second,setSecond]=useState(0)
    const [running,setRunning]=useState(false)
    const [timelog,settimelog]=useState([])
    useEffect(()=>{
        let interval;
        if(running){
        interval=setInterval(()=>{setSecond(prev=>prev+1)},1000)
        }
        return ()=> clearInterval(interval)
    },[running])
    function start(){
        setRunning(true)
    }
    function stop(){
        setRunning(false)
    }
    function reset(){
        setRunning(false)
        setSecond(0)
        settimelog([])
    }
    function timeformat(sec){
        const hours=Math.floor(sec/3600)
        const minute=Math.floor((sec%3600)/60)
        const second=Math.floor(sec%60)
        return `${hours.toString().padStart(2,'0')}:${minute.toString().padStart(2,'0')}:${second.toString().padStart(2,'0')}`
    }
    function Lap(){
        settimelog([...timelog, timeformat(second)])
    }
    return(
   <>
   <h1 className="q">Stop Watch</h1>
   <div className='c'>
   <div className='b'>
   <h1>{timeformat(second)}</h1>
   <button onClick={start} disabled={running}>Start</button>
   <button onClick={stop} disabled={!running}>Stop</button>
   <button onClick={reset} disabled={second==0}>Reset</button>
   <button onClick={Lap} disabled={second==0}>Lap</button>
   <div className='a'>
   <h1>Lap: </h1>
   {
    timelog.length>0?(
        <ul>
            {timelog.map((time, index)=>(<li key={index}>{time}</li>))}
        </ul>
    ):(<p>No Lap found</p>)
   }
    </div>
    </div>
    </div>
   </>

        
    )
}
export default Practice;