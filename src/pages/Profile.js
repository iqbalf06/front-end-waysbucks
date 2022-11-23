import React from "react";
import { Card, Col, Row, Stack } from "react-bootstrap";
import Group from "../components/images/Group.png";
import PhotoProfile from "../components/images/photoProfile.png";
import ProductTransaction from "../components/images/productTransaction.png";
import Qrcode from "../components/images/qr-code.png";

function Profile() {
  return (
    <div style={{ marginTop: "8%" }}>
      <Row>
        <Card
          border="white"
          style={{ width: "500px", marginTop: "40px", marginLeft: "200px" }}
        >
          <h1
            className="fw-bold"
            style={{ color: "#BD0707", fontSize: "24px", marginBottom: "20px" }}
          >
            My Profile
          </h1>
          <Row>
            <Card.Img
              style={{ width: "250px", height: "280px" }}
              src={PhotoProfile}
            />
            <Col>
              <Card.Body>
                <Card.Title>Full Name</Card.Title>
                <Card.Text>Egi Ganteng</Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>egigans@gmail.com</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>

        <Card
          border="white"
          style={{ width: "500px", marginTop: "40px", marginLeft: "100px" }}
        >
          <h1
            className="fw-bold"
            style={{ color: "#BD0707", fontSize: "24px", marginBottom: "20px" }}
          >
            My Transaction
          </h1>
          <Row>
            <Card
              border="white"
              style={{
                backgroundColor: "#F7DADA",
                width: "500px",
                height: "300px",
              }}
            >
              <Stack direction="horizontal" gap={1}>
                <Card.Img
                  style={{ width: "80px", height: "90px" }}
                  src={ProductTransaction}
                />
                <Col>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Title
                          className="fw-bold"
                          style={{
                            fontSize: "14px",
                            color: "#BD0707",
                            marginTop: "15px",
                          }}
                        >
                          Ice Coffee Palm Sugar
                        </Card.Title>
                        <p style={{ fontSize: "10px" }}>
                          <strong style={{ color: "#BD0707" }}>
                            Saturday,{" "}
                          </strong>
                          5 March 2020
                        </p>
                        <p style={{ fontSize: "10px" }}>
                          <strong style={{ color: "#BD0707" }}>
                            Toping :{" "}
                          </strong>
                          Bill Berry Boba, Bubble Tea Gelatin
                        </p>
                        <p style={{ fontSize: "10px" }}>Price : Rp.33.000</p>
                      </Col>
                      <img
                        src={Group}
                        style={{
                          width: "25%",
                          height: "20%",
                          marginRight: "15px",
                        }}
                      ></img>
                    </Row>
                  </Card.Body>
                </Col>
              </Stack>

              <Stack direction="horizontal" gap={1}>
                <Card.Img
                  style={{
                    width: "80px",
                    height: "90px",
                    marginBottom: "60px",
                  }}
                  src={ProductTransaction}
                />
                <Col>
                  <Card.Body>
                    <Row>
                      <Col style={{ marginBottom: "40px" }}>
                        <Card.Title
                          className="fw-bold"
                          style={{ fontSize: "14px", color: "#BD0707" }}
                        >
                          Ice Coffee Palm Sugar
                        </Card.Title>
                        <p style={{ fontSize: "10px" }}>
                          <strong style={{ color: "#BD0707" }}>
                            Saturday,
                          </strong>{" "}
                          5 March 2020
                        </p>
                        <p style={{ fontSize: "10px" }}>
                          <strong style={{ color: "#BD0707" }}>
                            Toping :{" "}
                          </strong>
                          Bill Berry Boba, Manggo
                        </p>
                        <p style={{ fontSize: "10px" }}>Price : Rp.36.000</p>
                      </Col>
                      <img
                        src={Qrcode}
                        style={{
                          width: "20%",
                          position: "absolute",
                          top: "140px",
                          left: "365px",
                        }}
                      ></img>
                      <div>
                        <p
                          style={{
                            fontSize: "10px",
                            color: "blueviolet",
                            position: "absolute",
                            top: "240px",
                            left: "385px",
                            border: "2px solid #00D1FF",
                            borderRadius: "2px",
                          }}
                        >
                          On The Ways
                        </p>
                      </div>
                      <p
                        className="fw-bold"
                        style={{
                          fontSize: "10px",
                          position: "absolute",
                          top: "270px",
                          paddingLeft: "275px",
                          color: "#BD0707",
                        }}
                      >
                        Sub Total : 69.000
                      </p>
                    </Row>
                  </Card.Body>
                </Col>
              </Stack>
            </Card>
          </Row>
        </Card>
      </Row>
    </div>
  );
}

export default Profile;
