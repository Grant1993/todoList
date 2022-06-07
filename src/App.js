import './App.css';
import React, { useState, useEffect } from "react";
import { FaTimes, FaSearchengin } from 'react-icons/fa';
import Button from './components/Button'


function App() {
  //this is the starting state when the page loads

  const [taskList, setTaskList] = useState([]);
  const [addTask, setAddTask] = useState('');
  const [complete, setComplete] = useState(false);
  const [search, setSearch] = useState('');
  const [searchParam] = useState(["task", "check"]);

  console.log(taskList)
  console.log(setTaskList)

  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
  }, [taskList]);

  useEffect(() => {
    const getTaskList = JSON.parse(localStorage.getItem('taskList'));
    if (getTaskList) {
      setTaskList(getTaskList);
    }
  }, []);

//the event adds a new task into state
const handleTaskAdd = (addTask) => {
  let list = taskList
  function taskAssign() {
    setTaskList([...taskList, {task: addTask, check: false, },]);
    setAddTask("") 
  }

  if (!list.some(t => t.task === addTask)) {
    taskAssign()
  } else {
    console.log("Task is already exists")
  }
}

//the event removes the task selected by the button click
const handleTaskRemove = (index) => {
  const list = [...taskList];
  list.splice(index, 1);
  setTaskList(list);
}

function searchTasks(taskList) {
  return taskList.filter((singletask) => {
    return searchParam.some((newItem) => {
        return (
          singletask[newItem]
            .toString()
            .toLowerCase()
            .indexOf(search.toLowerCase()) > -1
                );
              });
          });
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


  return (
    <form className="App" autoComplete="off">
      <header className="App-header">
        <label htmlFor="task">Tasks</label>
        <input className='searchBox' style={{background: <FaSearchengin />}} type="search" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)}/>
        {searchTasks(taskList).map((singleTask, index) => (
        <div key={index}>
          <ul style={{padding: "0px", margin: "8px", width: "250px"}}>
          <li style={{listStyle: "none", height: "45px", backgroundColor: "lightGrey", color: "black", borderRadius: "5px"}} >
              <label name="task" type="text" 
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
          {/* {<label id="blankInputMessage" style={{display: taskList.length < 1 ? 'inline' : 'none'}}>{}</label>} */}
            <Button id="add" text='Add' type="button" onClick={!addTask ? '' : () => handleTaskAdd(addTask)} />
          </div>
      </header>
    </form>
  );
}

export default App;
