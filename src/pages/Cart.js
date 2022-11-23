import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Attach from "../components/images/attachinvoice.png";
import CartProduct from "../components/images/cartProduct.png";
import Cup from "../components/images/cupcart.png";

function Cart() {
  const navigate = useNavigate();
  return (
    <Container style={{ marginTop: "7%" }}>
      <Row>
        <div style={{ width: "660px" }}>
          <h1
            className="fw-bold"
            style={{
              color: "#BD0707",
              fontSize: "24px",
              marginLeft: "120px",
              marginTop: "40px",
            }}
          >
            My Cart
          </h1>
          <h2
            style={{
              color: "#BD0707",
              fontSize: "18px",
              marginLeft: "120px",
              marginTop: "30px",
            }}
          >
            Review Your Order
          </h2>
          <hr
            style={{
              marginLeft: "120px",
              width: "690px",
              borderTop: "2px solid #974A4A",
            }}
          ></hr>
          <div>
            <img
              src={CartProduct}
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                left: "240px",
              }}
            ></img>
            <p
              className="fw-bold"
              style={{
                fontSize: "19px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "330px",
                bottom: "440px",
              }}
            >
              Ice Coffee Palm Sugar
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "330px",
                bottom: "410px",
              }}
            >
              {" "}
              <strong>Toping</strong> :
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "390px",
                bottom: "409px",
              }}
            >
              Bill Berry Boba, Bubble Tea Gelatin
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "860px",
                top: "252px",
              }}
            >
              Rp. 33.000
            </p>
            <img
              src={Cup}
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                left: "910px",
                bottom: "426px",
              }}
            ></img>
          </div>
          <div>
            <img
              src={CartProduct}
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                left: "240px",
                bottom: "300px",
              }}
            ></img>
            <p
              className="fw-bold"
              style={{
                fontSize: "19px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "330px",
                bottom: "333px",
              }}
            >
              Ice Coffee Palm Sugar
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "330px",
                bottom: "302px",
              }}
            >
              {" "}
              <strong>Toping</strong> :
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "390px",
                bottom: "302px",
              }}
            >
              Bill Berry Boba, Manggo
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "15px",
                position: "absolute",
                left: "860px",
                top: "356px",
              }}
            >
              Rp. 36.000
            </p>
            <img
              src={Cup}
              style={{
                width: "20px",
                height: "20px",
                position: "absolute",
                left: "910px",
                bottom: "323px",
              }}
            ></img>
          </div>
          <hr
            style={{
              marginLeft: "120px",
              marginTop: "220px",
              width: "690px",
              borderTop: "2px solid #974A4A",
            }}
          ></hr>
          <div>
            <hr
              style={{
                marginLeft: "120px",
                marginTop: "40px",
                width: "380px",
                borderTop: "2px solid #974A4A",
              }}
            ></hr>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "165px",
                position: "absolute",
                left: "240px",
                top: "356px",
              }}
            >
              Sub Total
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "165px",
                position: "absolute",
                left: "550px",
                top: "356px",
              }}
            >
              Rp. 69.000
            </p>

            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "165px",
                position: "absolute",
                left: "240px",
                top: "386px",
              }}
            >
              Qty
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "165px",
                position: "absolute",
                left: "607px",
                top: "386px",
              }}
            >
              2
            </p>
          </div>

          <div>
            <hr
              style={{
                marginLeft: "120px",
                marginTop: "80px",
                width: "380px",
                borderTop: "2px solid #974A4A",
              }}
            ></hr>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "165px",
                position: "absolute",
                left: "240px",
                top: "436px",
              }}
            >
              <strong>Total</strong>
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#BD0707",
                marginTop: "165px",
                position: "absolute",
                left: "550px",
                top: "436px",
              }}
            >
              <strong>Rp. 69.000</strong>
            </p>
          </div>

          <div>
            <img
              className="btn"
              src={Attach}
              style={{
                width: "220px",
                height: "122px",
                position: "absolute",
                left: "730px",
                top: "496px",
              }}
            ></img>
          </div>
        </div>
        <Col style={{ marginTop: "" }}>
          <Form style={{ position: "absolute", left: "1020px", top: "220px" }}>
            <Form.Group className="mb-1" controlId="formName">
              <Form.Label></Form.Label>
              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                  width: "300px",
                  height: "40px",
                  borderColor: "#BD0707",
                }}
                type="text"
                placeholder="Name"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                  width: "300px",
                  height: "40px",
                  borderColor: "#BD0707",
                }}
                type="email"
                placeholder="Email"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                  width: "300px",
                  height: "40px",
                  borderColor: "#BD0707",
                }}
                type="number"
                placeholder="Phone"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label></Form.Label>
              <Form.Control
                className="form-control bg-danger bg-opacity-10"
                style={{
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                  width: "300px",
                  height: "40px",
                  borderColor: "#BD0707",
                }}
                type="number"
                placeholder="Pos Code"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label></Form.Label>
              <Form.Control
                className="bg-danger bg-opacity-10"
                as="textarea"
                rows={3}
                cols={4}
                style={{
                  resize: "none",
                  border: "2px solid #BD0707",
                  borderColor: "#BD0707",
                }}
                placeholder="Address"
              />
            </Form.Group>

            <div className="d-grid" style={{}}>
              <Button
                className="text-white"
                variant="danger"
                size="md"
                style={{ backgroundColor: "#BD0707", marginTop: "20px" }}
                onClick={() => {
                  navigate(`/transactionadmin`);
                }}
              >
                Pay
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
