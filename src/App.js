import TaskForm from "./TaskForm";
import React, { useState } from "react";
import Task from "./Task";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
function App() {
  const [currentTasks, setCurrentTasks] = useState([]);
  const getTask = (newTask) => {
    setCurrentTasks((oldArrayTask) => [...oldArrayTask, newTask]);
  };
  const handleClick = () => {
    setCurrentTasks([]);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>To Do List</h1>
        <div
          style={{
            width: "500px",
            height: "600px",
            margin: "auto",
            marginTop: "2%",
          }}
        >
          <TaskForm newTask={getTask} />
          <Task tasks={currentTasks} />
          <Button
            variant="primary"
            style={{ marginBottom: "20px" }}
            type="submit"
            onClick={handleClick}
          >
            Delete All
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default App;
