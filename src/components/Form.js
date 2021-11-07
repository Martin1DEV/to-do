import React, {useState} from 'react';
import './Form.css'




const Form=(props)=>{


    const [text, setText]=useState('');
    const [checkbox, setCheckbox]=useState(false);
    const [date, setDate]=useState('');


const handleTextChange=(e)=>{
    setText(e.target.value);
}
const handleCheckboxChange=(e)=>{
    setCheckbox(e.target.checked)
    }
const handleDateChange=(e)=>{
    setDate(e.target.value)
    
}
const handleAddTask=()=>{
    props.addTask(text, checkbox, date);
    if(text&&date){
    setText('');
    setCheckbox(false);
    setDate('')}
}

    return (
<div id='form'>
<input  type='text' placeholder='Dodaj zadanie' onChange={handleTextChange} value={text}></input>
<label>Ważne<input  type='checkbox' onChange={handleCheckboxChange} checked={checkbox}></input></label>
<input type='date' onChange={handleDateChange} value={date}></input>
<button onClick={handleAddTask}>Dodaj zadanie</button>
</div>

    )
}

export default Form