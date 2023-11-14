import { useState } from "react";
import TaskType from "./components/TaskType";

export default function App() {
  const [taskTypes, setTaskTypes] = useState([]);
  const [newTaskTypeCreated, setNewTaskTypeCreated] = useState(false);
  const [taskTypeName, setTaskTypeName] = useState("");

  function addTaskType(newTaskType) {
    if (!newTaskType) {
      return;
    }
    let updatedTaskTypes = [...taskTypes];
    if (
      updatedTaskTypes.length > 0 &&
      updatedTaskTypes.indexOf(newTaskType) !== -1
    ) {
      return;
    }
    updatedTaskTypes.push(newTaskType.toUpperCase());
    setTaskTypes(updatedTaskTypes);
  }

  function handleTaskTypeNameChange(event) {
    setTaskTypeName(event.target.value);
  }

  function handleRemoveTaskType(taskTypeName) {
    let updatedTaskTypes = [...taskTypes];
    updatedTaskTypes = updatedTaskTypes.filter((task) => task !== taskTypeName);
    setTaskTypes(updatedTaskTypes);
  }

  let newTaskControls = (
    <div className="new-task-controls">
      <span>
        <label htmlFor="task-type-name">ENTER TASK TYPE</label>
        <input
          type="text"
          id="task-type-name"
          value={taskTypeName}
          onChange={handleTaskTypeNameChange}
        />
      </span>
      <button
        onClick={() => {
          addTaskType(taskTypeName);
          setNewTaskTypeCreated(false);
          setTaskTypeName("");
        }}
        className="add-task-type-btn btn"
      >
        ADD TASK TYPE
      </button>
    </div>
  );

  function handleTaskType() {
    setNewTaskTypeCreated(true);
  }

  return (
    <>
      <h1 className="header-heading">Luxury React To - Do App</h1>
      <section className="tasks-section">
        {taskTypes.length > 0 &&
          taskTypes.map((taskType) => (
            <TaskType
              key={taskType}
              name={taskType}
              onRemove={() => {
                handleRemoveTaskType(taskType);
              }}
            />
          ))}
        {newTaskTypeCreated ? (
          newTaskControls
        ) : (
          <button
            className="add-task-type-btn btn"
            onClick={() => {
              handleTaskType();
            }}
          >
            + ADD TASK TYPE
          </button>
        )}
      </section>
    </>
  );
}
