import React, {useState} from 'react';
import './App.css';
import Form from './Form.js';
import TaskList from './TaskList.js';

function App() {

  const [tasks, setTasks]=useState([]);

const handleAddTask=(text, checkbox,date,done=false)=>{

  if(text&&date){
  const task={
    text,
    checkbox,
    date,
    done,
  };
  setTasks([...tasks,task]);}
  else{
    alert('Podaj datę wykonania')
  }
  
  }
  const handleDone=(id)=>{
    const newTasks=[...tasks];
newTasks.forEach(task=>{
  if(task.text===id){
    task.done=true;
    
    setTasks(newTasks)   
  }
 
})
  }
  return (
    <div className="App">
     <h1>To do app</h1>
     <Form addTask={handleAddTask}/>
     <TaskList handleDone={handleDone}tasks={tasks}/>
    </div>
  );
}

export default App;
