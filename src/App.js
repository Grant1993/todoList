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
}

//the event removes the task selected by the button click
const handleTaskRemove = (index) => {
  const list = [...taskList];
  list.splice(index, 1);
  setTaskList(list);
}

const handleChecked = () => {
  const list = [...complete];
  setComplete(list);
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

let blankInput = "";

if (addTask.length < 1) {
  blankInput = "inline";
} else {
  blankInput = "none"
}

  return (
    <form className="App" autoComplete="off">
      <header className="App-header">
        <label htmlFor="task">Tasks</label>

        {taskList.map((singleTask, index) => (
        <div key={index}>
          <ul style={{padding: "0px", margin: "8px", width: "250px"}}>
            <li style={{listStyle: "none", height: "45px", backgroundColor: "lightGrey", color: "black", borderRadius: "5px"}} >
              <label name="task" type="text" for="check"
              className={complete === true ? "TaskLabelCheck" : "TaskLabel"}
              id="task" required value={singleTask.task}>{singleTask.task}</label>
              <div>
              {taskList.length > 1 && <button type="button" className='Remove' onClick={() => handleTaskRemove(index)}><FaTimes /></button>}
              <input name="check" type="checkbox" className='checkmark' id="check" required value={complete} onChange = {(e) => setComplete(e.target.checked)}/>
              </div>
            </li>
          </ul>
          
        </div>
        ))}
          <div className='TaskForm'>
          <input name="addTask" type="text" required id="addTask" value={addTask} onChange = {(e) => setAddTask(e.target.value)}/>
          <br />
          <label id="blankInputMessage" style={{display: blankInput}}>Please enter a task</label>
            <Button id="add" text='Add' type="button" onClick={() => handleTaskAdd(addTask)} />
          </div>
      </header>
    </form>
  );
}

export default App;
