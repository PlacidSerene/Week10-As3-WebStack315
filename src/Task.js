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
              <label for="cbox4">{task}</label>
              <Button
                style={{ float: "right" }}
                variant="link"
                onClick={() => props.tasks.splice(i, 1)}
              >
                Delete
              </Button>
              <br />
            </div>
          );
        })}
      </Jumbotron>
    </div>
  );
};

export default Task;
