import './App.css';
import React, { useState } from "react";



function App() {
  //this is the starting state when the page loads
  const [taskList, setTaskList] = useState([
    { 
      task: "", check: false, 
    },

]);

//the event adds a new task into state
const handleTaskAdd = () => {
  setTaskList([...taskList, { task: "", check: false, },])
  // if(!taskList.some(t => t.task === "")) {
    
  // } else {
  //   alert("Please fill in the empty task")
  // }
}

const handleTaskInput = (e, index) => {
  let addTask = document.getElementById('addTask');
  const {name, value} = e.target
  const list = [...taskList];
    list[index][name] = addTask.value = value;
  setTaskList(list);
}


//the event removes the task selected by the button click
const handleTaskRemove = (index) => {
  const list = [...taskList];
  list.splice(index, 1);
  setTaskList(list);
}

//the event checks to see if a task has been updated and stores it into state by checkign the index of the task
const handleTaskChange = (e, index, type) => {
  const {name, value, checked} = e.target
  const list = [...taskList];
  //the some method will check if a task already exists with the same name
  if (!list.some(t => t.task === value)) {
   if (type === "task") {
    list[index][name] = value;
   } else {
    list[index][name] = checked;
   }
  } else {
    alert("Task already exists")
  }
  setTaskList(list);
}

console.log(taskList)

  return (
    <form className="App" autoComplete="off">
      <header className="App-header">
        <label htmlFor="task">Tasks</label>
        {taskList.map((singleTask, index) => (
        <div key={index}>
          <ul>
            <li><label name="task" type="text" id="task" required value={singleTask.task} onChange = {(e) => handleTaskChange(e, index, "task")}>{singleTask.task}</label><input name="check" type="checkbox" id="check" required value={singleTask.check} onChange = {(e) => handleTaskChange(e, index, "checkbox")}/></li>
          </ul>
          
          <div>
            {taskList.length > 1 && <button type="button" onClick={() => handleTaskRemove(index)}>Remove Task</button>}
          </div>
          <div>
            <input name="addTask" type="text" id="addTask" onChange = {(e) => handleTaskInput(e, index)}/>
            {taskList.length - 1 === index && <button type="button" onClick={handleTaskAdd}>Add Task</button>}
          </div>
        </div>
        ))}
      </header>
    </form>
  );
}

export default App;
