import { useState } from "react";
import Task from "./Task";

export default function TaskType({ name, onRemove }) {
  const [taskName, setTaskName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTaskCreated, setNewTaskCreated] = useState(false);

  function handleTaskNameChange(event) {
    setTaskName(event.target.value);
  }

  function handleNewTaskCreated() {
    setNewTaskCreated(true);
  }

  function addNewTask(taskName) {
    if (!taskName) {
      return;
    }
    let updatedTasks = [...tasks];
    if (updatedTasks.length > 0 && updatedTasks.indexOf(taskName) !== -1) {
      return;
    }
    updatedTasks.push(taskName.toUpperCase());
    setTasks(updatedTasks);
  }

  let newTaskControls = (
    <div className="new-task-controls">
      <span>
        <label htmlFor="new-task-name">ENTER TASK NAME</label>
        <input
          type="text"
          id="task-type-name"
          value={taskName}
          onChange={handleTaskNameChange}
        />
      </span>
      <button
        onClick={() => {
          addNewTask(taskName);
          setNewTaskCreated(false);
          setTaskName("");
        }}
        className="add-task-type-btn btn"
      >
        ADD THIS TASK
      </button>
    </div>
  );

  function handleTaskCompleted(taskToRemove) {
    let updatedTasks = [...tasks];
    updatedTasks = updatedTasks.filter((task) => task !== taskToRemove);
    setTasks(updatedTasks);
  }

  return (
    <div className="task-type">
      <h3 className="task-type-heading">{name}</h3>
      <div className="tasks">
        {tasks.length > 0 &&
          tasks.map((task) => (
            <Task
              key={task}
              name={task}
              onComplete={() => handleTaskCompleted(task)}
            />
          ))}
      </div>
      {newTaskCreated ? (
        newTaskControls
      ) : (
        <button
          className="add-new-task-btn btn"
          onClick={() => {
            handleNewTaskCreated();
          }}
        >
          ADD NEW TASK
        </button>
      )}
      <button className="remove-task-btn btn" onClick={onRemove}>
        REMOVE TASK TYPE
      </button>
    </div>
  );
}
