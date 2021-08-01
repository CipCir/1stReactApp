import React from "react";
import { FaPlus } from "react-icons/fa";
import { Form, Button, Modal } from "react-bootstrap";
import { useState, useRef } from "react";
import { db } from "../../firebase";

function AddTasks() {
  const [showFrm, setShowFrm] = useState(false);
  const taskTitle = useRef();

  const handleClose = () => setShowFrm(false);
  const handleShow = () => setShowFrm(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(taskTitle.current.value);
    db.ref("tsk")
      .push({ tName: taskTitle.current.value, tStatus: "Bck" })
      .then(() => {
        handleClose();
      });
  };

  return (
    <div>
      <Modal show={showFrm} onHide={handleClose}>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group id="taskTitle">
              <Form.Label>Task title</Form.Label>
              <Form.Control type="text" ref={taskTitle} required />
            </Form.Group>
            <div className="d-flex justify-content-between mt-3">
              <Button
                variant="secondary"
                className="w-25"
                type="button"
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button className="w-25" type="submit">
                Add
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>

      <Button
        variant="primary"
        style={{ position: "fixed", bottom: "50px", right: "10px" }}
        onClick={handleShow}
      >
        <FaPlus />
      </Button>
    </div>
  );
}

export default AddTasks;
