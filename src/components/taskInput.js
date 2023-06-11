import React, {useState} from "react";

function TaskInput({ onAddTask }) {
    const [task, setTask] = useState("");
  
    const handleTaskChange = (e) => {
      setTask(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (task.trim()) {
        onAddTask(task);
        setTask("");
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Enter task"
          value={task}
          onChange={handleTaskChange}
        />
        <button className="button" type="submit">
          Add
        </button>
      </form>
    );
  }

  export default TaskInput;