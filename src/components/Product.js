import React, { useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";


function Product() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate()

  let isLogin = JSON.parse(localStorage.getItem("DATA_USER"));

  const DataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"));
  
  const users = [];
  const LoginFunction =(dataLogin)=>{

    isLogin.forEach((element) => {
      if (
        dataLogin.email === element.email &&
        dataLogin.password === element.password
      ) {
        users.push(element);
        localStorage.setItem("VALUE_LOGIN", JSON.stringify(users));
        setShowLogin(false);
      } else {
        console.log(isLogin);
      }

    });
    window.location.reload();
  }

  const DataUser = JSON.parse(localStorage.getItem("VALUE_LOGIN"));

  return (
    <Row className="d-flex gap-4 justify-content-center">
    {DataProduct.map((product) => (
      <Card
        key={product.id}
        style={{
          width: "20rem",
          borderRadius: "14px",
          backgroundColor: "#F6DADA",
          cursor: "pointer",
          padding: "0",
          margin: "0",
        }}
        onClick={() =>
          DataUser === null ? setShowLogin(true) : navigate(`/products/${product.id}`)
        }
      >
        <Login
                  show={showLogin}
                  onHide={() => {
                    setShowLogin(false);
                  }}
                  setShowLogin={setShowLogin}
                  setShowRegister={setShowRegister}
                  LoginFunction={LoginFunction}
                />
        <Register
                  show={showRegister}
                  onHide={() => {
                    setShowRegister(false);
                  }}
                  setShowRegister={setShowRegister}
                  setShowLogin={setShowLogin}
                />
        <Card.Img
          variant="top"
          src={product.imgproduct}
          style={{ width: "20rem" }}
        />
        <Card.Body>
          <Card.Title style={{ color: "#BD0707" }}>{product.name}</Card.Title>
          <Card.Text style={{ color: "#BD0707" }}>Rp. {product.price}</Card.Text>
        </Card.Body>
      </Card>
    ))}
    </Row>)
  
}
export default Product