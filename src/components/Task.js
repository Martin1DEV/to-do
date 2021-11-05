import React from 'react';
import './Task.css'



const Task=(props)=>{

const {text, date,checkbox,done }= props.task
    return(

        <div className='task'><span style={checkbox?{color:'red'}:{}}>{text}</span><span>Wykonać do:   {date}</span><button>Wykonane</button><button>Usuń</button></div>
    )
}

export default Task;