import React from 'react';
import Task from './Task.js'
import './TaskList.css';

const TaskList=(props)=>{
    
    const items=[...props.tasks];
    const content=items.map(task=><Task key={task.text} task={task}/>)
    
    return(


        <><div id='tasksList'>

        {content}
        </div>
        </>
    )
}

export default TaskList;