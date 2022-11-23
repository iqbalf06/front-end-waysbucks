import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Stack, Card } from "react-bootstrap";
import Fileup from "../images/file.png";
import AddPic from "../images/addproduct.png";

function AddProduct() {
  const products = []
  const [DataProduct, setState] = useState ({
    id: 0,
    name: "",
    price: 0,
    imgproduct: "",
  })

  
  const handleOnChange = (e) => {
    setState({
      ...DataProduct,
      [e.target.name]: e.target.value,
    })
  }
  
  const addDataProduct = JSON.parse(localStorage.getItem("DATA_PRODUCT"))
  const handleOnSubmit = (e) => {
    e.preventDefault()

    if(addDataProduct === null) {
      products.push(DataProduct)
      localStorage.setItem("DATA_PRODUCT", JSON.stringify(products))
    } else {
      for (let i = 0; i < addDataProduct.length; i++) {
        products.push(addDataProduct[i])
      }
      DataProduct.id = addDataProduct.length
      DataProduct.price = parseInt(DataProduct.price)
      products.push(DataProduct)
      localStorage.setItem("DATA_PRODUCT", JSON.stringify(products))
    }
    document.getElementById("addProduct").reset()
  }


  return (
    <Container>
      <Row>
        <Col style={{ marginTop: "7%" }}>
          <h1 className="my-5" style={{ fontSize: "24px", color: "#BD0707" }}>
            Product
          </h1>
          <Form onSubmit={handleOnSubmit}
          id="addProduct">
            <Form.Group className="mb" controlId="nameProduct">
              <Form.Label></Form.Label>
              <Form.Control
              onChange={handleOnChange}
              name="name"
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
            <Form.Group className="mb" controlId="price">
              <Form.Label></Form.Label>
              <Form.Control
              onChange={handleOnChange}
              name="price"
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
            <Form.Group className="mb" controlId="fileUpload" style={{position:"relative"}}>
              <Form.Label>
                <img
                  src={Fileup}
                  style={{
                    position: "absolute",
                    width: "19px",
                    height: "30px",
                    left: "630px",
                    marginTop: "22px",
                  }}
                ></img>
              </Form.Label>

              <Form.Control
              onChange={handleOnChange}
              name="imgproduct"
                className="form-control bg-danger bg-opacity-10"
                style={{
                  width: "664px",
                  height: "50px",
                  borderColor: "#BD0707",
                  backgroundColor: "#E0C8C8",
                  border: "2px solid #BD0707",
                }}
                type="text"
                size="md"
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
                type="submit"
              >
                Add Product
              </Button>
            </div>
          </Form>
        </Col>
        <Card.Img
          src={DataProduct.imgproduct} alt="photo product"
          style={{
            width: "426px",
            height: "500px",
            marginLeft: "10%",
            marginTop: "10%",
            marginRight: "4%",
          }}
        />
      </Row>
    </Container>
  );
}

export default AddProduct;
