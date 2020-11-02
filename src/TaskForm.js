import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function Task(props) {
  const [addedTask, setAddedTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.newTask(addedTask);
    setAddedTask("");
  };
  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ fontSize: "1.5rem" }}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            placeholder="Add a task"
            value={addedTask}
            onChange={(e) => setAddedTask(e.target.value)}
          />
          <Form.Text className="text-muted" style={{ marginLeft: "10px" }}>
            Let's be more productive!😉
          </Form.Text>
        </Form.Group>
        <Button
          variant="primary"
          style={{ marginBottom: "20px" }}
          type="submit"
        >
          Add
        </Button>{" "}
      </Form>
    </div>
  );
}
