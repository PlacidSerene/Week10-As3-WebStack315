// Import Stuff

import TaskForm from "./TaskForm";
import React, { useState } from "react";
// import Task from "./Task";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./Task.css";

// App
function App() {
  const [currentTasks, setCurrentTasks] = useState([]);
  const getTask = (newTask) => {
    setCurrentTasks((oldArrayTask) => [...oldArrayTask, newTask]);
  };
  const handleClick = () => {
    setCurrentTasks([]);
  };
  const myFunction = (array, index) => {
    for (var i = 0; i < array.length; i++) {
      if (i == index) {
        array.splice(i, 1);
      }
    }
    return array;
  };
  const removeItem = (id) => {
    // let newArrayTask = myFunction(currentTasks, id);

    let newArrayTask = myFunction(currentTasks, id);
    setCurrentTasks(newArrayTask);
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
          {currentTasks.map((task, i) => {
            console.log(currentTasks);
            return (
              <div
                key={i}
                style={{
                  border: "solid #c060a1",
                  borderRadius: "5px",
                  marginBottom: "5px",
                  paddingTop: "2%",
                }}
              >
                <input type="checkbox" className="cbox4" />
                <label htmlFor="cbox4">{task}</label>
                <Button
                  style={{ float: "right" }}
                  variant="link"
                  onClick={() => removeItem(i)}
                >
                  Delete
                </Button>
                <br />
              </div>
            );
          })}
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
