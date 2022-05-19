import './App.css';
import React, { useState } from "react";



function App() {
  //this is the starting state when the page loads
  const [taskList, setTaskList] = useState([
    { task: ""},{check: ""},

]);

//the event adds a new task into state
const handleTaskAdd = () => {
  setTaskList([...taskList, { task: ""},{check: ""},])
}

//the event removes the task selected by the button click
const handleTaskRemove = (index) => {
  const list = [...taskList];
  list.splice(index, 1);
  setTaskList(list);
}

//the event checks to see if a task has been updated and stores it into state by checkign the index of the task
const handleTaskChange = (e, index) => {
  const {name, value} = e.target
  const list = [...taskList];
  list[index][name] = value;
  setTaskList(list);
}
console.log(taskList, setTaskList)

  return (
    <form className="App" autoComplete="off">
      <header className="App-header">
        <label htmlFor="task">Tasks</label>
        {taskList.map((singleTask, index) => (
        <div key={index}>
          <input name="task" type="text" id="task" required value={singleTask.task} onChange = {(e) => handleTaskChange(e, index)}/>
          <input name="check" type="checkbox" id="check" required value={singleTask.check} onChange = {(e) => handleTaskChange(e, index)}/>
          
          {taskList.length - 1 === index && <button type="button" onClick={handleTaskAdd}>Add Task</button>}

          {taskList.length > 1 && <button type="button" onClick={() => handleTaskRemove(index)}>Remove Task</button>}
        </div>
        ))}



      </header>
    </form>
  );
}

export default App;
