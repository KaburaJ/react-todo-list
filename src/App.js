import React, { useState } from "react";
import TaskInput from "./components/taskInput";
import "./App.css";


function App() {
  const [tasklist, setTaskList] = useState([]);
  const [editableTasks, setEditableTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const handleAddTask = (task) => {
    setTaskList((prevTaskList) => [
      ...prevTaskList,task
    ]);
    setEditableTasks((prevEditableTasks) => [...prevEditableTasks, false]);
    setCompleted((prevCompleted) => [...prevCompleted, false]);
  };  
  

  const handleTaskDelete = (index) => {
    setTaskList((prevTaskList) => {
      const updatedList = [...prevTaskList];
      updatedList.splice(index, 1);
      return updatedList;
    });
    setEditableTasks((prevEditableTasks)=>{
      const updatedEditableTasks = [...prevEditableTasks];
      updatedEditableTasks.splice(index, 1);
      return updatedEditableTasks;
    });
    setCompleted((prevCompleted) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted.splice(index, 1);
      return updatedCompleted;
    });
  };

  const handleTaskEdit = (index) => {
    setEditableTasks((prevEditableTasks) =>{
      const updatedEditableTasks = [...prevEditableTasks];
      updatedEditableTasks[index] = true;
      return updatedEditableTasks;
    });
  };

  const handleTaskUpdate = (index, newText) => {
    setTaskList((prevTaskList) => {
      const updatedList = [...prevTaskList];
      updatedList[index] = newText;
      return updatedList
    });
  };  

  const handleEditableTaskCompleted = (index) => {
    setEditableTasks((prevEditableTasks) =>{
      const updatedEditableTasks = [...prevEditableTasks];
      updatedEditableTasks[index] = false;
      return updatedEditableTasks;
    })
  }
    const handleTaskCompleted = (index) => {
    setCompleted((prevCompleted) => {
      const updatedCompleted = [...prevCompleted];
      updatedCompleted[index] = !updatedCompleted[index];
      return updatedCompleted;
    });
  }
  

  return (
    <div className="app">
      <h1>To-do List App</h1>
      <TaskInput onAddTask={handleAddTask} />
      <div className="task-results">
        <ul>
        <h2>Tasks</h2>
          {tasklist.map((task, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={completed[index]}
                className="checkbox"
                onChange={() => handleTaskCompleted(index)}
              />
              {editableTasks[index] ? (
                <>
                  <input
                    type="text"
                    className="task"
                    value={task}
                    onChange={(e) => handleTaskUpdate(index, e.target.value)}
                  />
                  <button
                    className="save-button"
                    onClick={() => handleEditableTaskCompleted(index)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h2
                    style={{ color: completed[index] ? "green" : "red" }}
                    className="task"
                  >
                    {task}
                  </h2>
                  <button
                    className="edit-button"
                    onClick={() => handleTaskEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => handleTaskDelete(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
