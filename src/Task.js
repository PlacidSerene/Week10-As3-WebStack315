import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
// import CheckBox from "./CheckBox";
import "./Task.css";
const Task = (props) => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "white", padding: "0.5%" }}>
        <h2 style={{ textAlign: "center" }}>Task Lists</h2>
        {props.tasks.map((task, i) => {
          console.log(i);
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
              <br />
            </div>
          );
        })}
      </Jumbotron>
    </div>
  );
};

export default Task;
