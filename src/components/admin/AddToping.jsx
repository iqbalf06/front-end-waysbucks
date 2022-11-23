import React from "react";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap";
import Fileup from "../images/file.png";
import Addtop from "../images/addtoping.png";

function AddToping() {
  return (
    <Container>
      <Row>
        <Col style={{ marginTop: "7%" }}>
          <h1 className="my-5" style={{ fontSize: "24px", color: "#BD0707" }}>
            Product
          </h1>
          <Form>
            <Form.Group className="mb" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  width: "664px",
                  height: "50px",
                  borderColor: "#BD0707",
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                }}
                type="text"
                placeholder="Nama Product"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  width: "664px",
                  height: "50px",
                  borderColor: "#BD0707",
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                }}
                type="text"
                placeholder="Price"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb" controlId="formBasicEmail">
              <Form.Label>
                <img
                  src={Fileup}
                  style={{
                    position: "absolute",
                    width: "19px",
                    height: "30px",
                    left: "750px",
                    marginTop: "22px",
                  }}
                ></img>
              </Form.Label>

              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  width: "664px",
                  height: "50px",
                  borderColor: "#BD0707",
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                }}
                type="file"
                size="lg"
                placeholder="Photo Product"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div style={{ marginTop: "65px", marginLeft: "45px" }}>
              <Button
                className="text-white"
                variant="primary"
                size="md"
                style={{ backgroundColor: "#BD0707", width: "89%" }}
              >
                Add Product
              </Button>
            </div>
          </Form>
        </Col>
        <img
          src={Addtop}
          style={{
            width: "426px",
            height: "500px",
            marginLeft: "10%",
            marginTop: "10%",
            marginRight: "4%",
          }}
        ></img>
      </Row>
    </Container>
  );
}

export default AddToping;
