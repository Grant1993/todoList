import './App.css';
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import Button from './components/Button'


function App() {
  //this is the starting state when the page loads
  const [taskList, setTaskList] = useState([]);
  const [addTask, setAddTask] = useState('')
  const [complete, setComplete] = useState(false)

//the event adds a new task into state
const handleTaskAdd = (setAddTask) => {
  setTaskList([...taskList, {task: setAddTask, check: false, },]);

  if(!taskList.some(t => t.task === "")) {


  } else {

  }
}

//the event removes the task selected by the button click
const handleTaskRemove = (index) => {
  const list = [...taskList];
  list.splice(index, 1);
  setTaskList(list);
}

//the event checks to see if a task has been updated and stores it into state by checkign the index of the task
// const handleTaskChange = (e, index, type) => {
//   const {name, value, checked} = e.target
//   const list = [...taskList];
//   //the some method will check if a task already exists with the same name
//   if (!list.some(t => t.task === value)) {
//    if (type === "task") {
//     list[index][name] = value;
//    } else {
//     list[index][name] = checked;
//    }
//   } else {
//     alert("Task already exists")
//   }
//   setTaskList(list);
// }

console.log(addTask.e)

let blankInput = true;

  return (
    <form className="App" autoComplete="off">
      <header className="App-header">
        <label htmlFor="task">Tasks</label>

        {taskList.map((singleTask, index) => (
        <div key={index}>
          <ul style={{padding: "0px", width: "200px"}}>
            <li style={{listStyle: "none", backgroundColor: "lightGrey", color: "black", borderRadius: "5px"}} >
              <label name="task" type="text" 
              style={{marginRight: "20px", marginLeft:"5px", fontFamily: 'Arial', fontSize: '21px', float:'left', paddingTop: "8px"}} 
              id="task" required value={singleTask.task}>{singleTask.task}</label>
              <input name="check" type="checkbox" style={{}} id="check" required value={complete} onChange = {(e) => setComplete(e.currentTarget.checked)}/>
            </li>
          </ul>
          
          <div>
            {taskList.length > 1 && <button type="button" onClick={() => handleTaskRemove(index)}><FaTimes style={{color: 'red', cursor: 'pointer'}} /></button>}
          </div>
        </div>
        ))}
          <div>
          <input name="addTask" type="text" id="addTask" value={addTask} onChange = {(e) => setAddTask(e.target.value)}/>
          <label id="blankInputMessage" hidden={blankInput}>Please enter a task</label>
            <Button text='Add' type="button"  onClick={addTask === "" ? blankInput = false : () => handleTaskAdd(addTask, complete)} />
          </div>
      </header>
    </form>
  );
}

export default App;
