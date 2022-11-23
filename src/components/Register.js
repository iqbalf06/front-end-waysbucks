import { React, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Register({
  show,
  onHide,
  setShowRegister,
  setShowLogin,
}) {
  const users = [];
  const [userData, setState] = useState({
    id: 0,
    email: "",
    password: "",
    fullname: "",
    role: "user",
  });

  const addDataUser = JSON.parse(localStorage.getItem("DATA_USER"));

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (addDataUser === null) {
      users.push(userData);
      localStorage.setItem("DATA_USER", JSON.stringify(users));
    } else {
      for (let i = 0; i < addDataUser.length; i++) {
        users.push(addDataUser[i]);
      }
      userData.id = addDataUser.length;
      users.push(userData);
      localStorage.setItem("DATA_USER", JSON.stringify(users));
    }
    setShowRegister(false);
    setShowLogin(true);
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
          Register
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="col py-1 m-1">
        <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) => setState({ ...userData, email: e.target.value })}
              className="form-control bg-danger bg-opacity-10"
              style={{
                height: "50px",
                borderColor: "#BD0707",
                backgroundColor: "#E0C8C8",
                border: "2px solid #BD0707",
              }}
              type="email"
              placeholder="Email"
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) =>
                setState({ ...userData, password: e.target.value })
              }
              className="form-control bg-danger bg-opacity-10"
              style={{
                height: "50px",
                borderColor: "#BD0707",
                backgroundColor: "#E0C8C8",
                border: "2px solid #BD0707",
              }}
              type="Password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb" controlId="formBasicPassword">
            <Form.Label></Form.Label>
            <Form.Control
              onChange={(e) =>
                setState({ ...userData, fullname: e.target.value })
              }
              className="form-control bg-danger bg-opacity-10"
              style={{
                height: "50px",
                borderColor: "#BD0707",
                backgroundColor: "#E0C8C8",
                border: "2px solid #BD0707",
              }}
              type="text"
              placeholder="Full Name"
            />
          </Form.Group>
          <div className="d-grid gap-2 py-1 my-3">
            <Button
              className="text-white"
              variant="danger"
              size="lg"
              style={{ backgroundColor: "#BD0707" }}
              type="submit"
            >
              Register
            </Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer className="justify-content-center">
        <Link
          onClick={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
          style={{ textDecoration: "none", color: "black" }}
        >
          Already have an account ? Click <strong>Here</strong>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
