import React from 'react';
import Task from './Task.js'
import './TaskList.css';

const TaskList=(props)=>{
    
    const items=[...props.tasks];


    const active=items.filter(item=>item.done===false);
    const done=items.filter(item=>item.done===true);
    const doneContent=done.map(task=><Task key={task.text} handleDone={props.handleDone} task={task}/>);

    const activeContent=active.map(task=><Task key={task.text} handleDone={props.handleDone} task={task}/>)
    
    return(


        <><div id='tasksList'>
            <h2>Zadania do zrobienia:</h2>
                <div className="active">{activeContent}</div>
                <div id="line"></div>
            <h2>Zadania zrobione:</h2>
                <div className="done">{doneContent}</div>
        </div>
        </>
    )
}

export default TaskList;