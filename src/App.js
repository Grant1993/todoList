import './App.css';
import React, { useState } from "react";



function App() {
  const [taskList, setTaskList] = useState([
    { task: ""},

]);

const handleTaskAdd = () => {
  setTaskList([...taskList, { task: ""},])

}

const handleTaskRemove = (index) => {
  const list = [...taskList];
  list.splice(index, 1);
  setTaskList(list);

}

const handleTaskChange = (e, index) => {
  const {name, value} = e.target
  const list = [...taskList];
  list[index][name] = value;
  setTaskList(list);
}

  return (
    <form className="App" autoComplete="off">
      <header className="App-header">
        <label htmlFor="task">Tasks</label>
        {taskList.map((singleTask, index) => (
        <div key={index}>
          <input name="task" type="text" id="task" required value={singleTask.task} onChange = {(e) => handleTaskChange(e, index)}/>
          
          {taskList.length - 1 === index && <button type="button" onClick={handleTaskAdd}>Add Task</button>}

          {taskList.length > 1 && <button type="button" onClick={() => handleTaskRemove(index)}>Remove Task</button>}
        </div>
        ))}



      </header>
    </form>
  );
}

export default App;
