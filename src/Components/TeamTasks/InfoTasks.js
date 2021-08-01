import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { FaInfoCircle } from "react-icons/fa";
import "./InfoTasks.css";

function InfoTasks() {
  const [showInf, setShowInf] = useState(false);
  const handleClose = () => setShowInf(false);
  const handleShow = () => setShowInf(true);
  return (
    <>
      <div onClick={handleShow} className="MainTxt">
        <FaInfoCircle className="MainInfo" />
        Team tasks details
      </div>
      <Modal show={showInf} onHide={handleClose}>
        <Modal.Body>
          <p>
            To see the benefits of using a reactive DB, you can open multiple
            browser windows with this page and even use multiple accounts.
          </p>
          <p>
            You can notice that when an update is done the change is
            automatically propagated in all sessions without having to refresh
            the browser window.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default InfoTasks;
