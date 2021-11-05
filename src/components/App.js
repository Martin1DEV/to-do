import React, {useState} from 'react';
import './App.css';
import Form from './Form.js';
import TaskList from './TaskList.js';

function App() {

  const [tasks, setTasks]=useState([]);

const handleAddTask=(text, checkbox,date,done=false)=>{
  const task={
    text,
    checkbox,
    date,
    done,
  };
  setTasks([...tasks,task]);
  
  

}
  return (
    <div className="App">
     <h1>To do app</h1>
     <Form addTask={handleAddTask}/>
     <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
