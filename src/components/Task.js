import React from 'react';
import './Task.css'



const Task=(props)=>{

const {text, date,checkbox,done }= props.task;


if(!done){

    return(

        <div className='taskActive'><span style={checkbox?{color:'red'}:{}}>{text}</span><span>Wykonać do:   {date}</span>
        <button onClick={()=>props.handleDone(text)}>Wykonane</button>
        <button>Usuń</button></div>
    )
}else{
    const finish=new Date().toLocaleString();

    return(

        <div className='taskDone'>
            <span style={checkbox?{color:'red'}:{}}>{text}</span>
            <span>Wykonać do:   {date}</span>
            <span>Potwierdzenie wykonania: {finish}</span>
        <button onClick={()=>props.handleDone(text)}>Wykonane</button>
        <button>Usuń</button>
        </div>
    )
}


    
}

export default Task;