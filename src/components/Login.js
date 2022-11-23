import React, { useState } from "react";
import { Button, Modal, Form, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Login({ show, onHide, setShowRegister, setShowLogin, LoginFunction }) {
  const [dataLogin, setUser] = useState({
    email: "",
    password: "",
  }); 

  const handleOnSubmit = (e) => {
    e.preventDefault()
    LoginFunction(dataLogin);
   
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="md p-5"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="fw-bold"
          style={{ fontSize: "36px", color: "#BD0707" }}
        >
          Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) => setUser({ ...dataLogin, email: e.target.value })}
              className="form-control bg-danger bg-opacity-10"
              style={{
                height: "50px",
                borderColor: "#BD0707",
                borderColor: "#BD0707",
                backgroundColor: "#E0C8C8",
                border: "2px solid #BD0707",
              }}
              type="email"
              placeholder="Email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) =>
                setUser({ ...dataLogin, password: e.target.value })
              }
              className="form-control bg-danger bg-opacity-10"
              style={{
                height: "50px",
                borderColor: "#BD0707",
                borderColor: "#BD0707",
                backgroundColor: "#E0C8C8",
                border: "2px solid #BD0707",
              }}
              type="Password"
              placeholder="Password"
            />
          </Form.Group>
          <div className="d-grid gap-2">
            <Button
              className="text-white"
              variant="danger"
              size="lg"
              style={{ backgroundColor: "#BD0707" }}
              type="submit"
            >
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Link
          onClick={() => {
            setShowRegister(true);
            setShowLogin(false);
          }}
          style={{
            textDecoration: "none",
            textAlign: "center",
            color: "black",
          }}
        >
          Don't have an acccount ? Click <strong>Here</strong>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
