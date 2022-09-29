import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        New Project
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a New Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Project Author</Form.Label>
              <Form.Control type="text" placeholder="Project Author..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Project Title</Form.Label>
              <Form.Control type="text" placeholder="Project Title..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Project Description</Form.Label>
              <Form.Control type="text" placeholder="Project Description..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
