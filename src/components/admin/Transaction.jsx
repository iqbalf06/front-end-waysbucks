import React from "react";
import { Table, Container, Button, Stack } from "react-bootstrap";
import Approve from "../images/approve.png";
import Cancel from "../images/cancel.png";

function Transaction() {
  return (
    <Container>
      <h1 className="my-5" style={{ fontSize: "24px", color: "#BD0707" }}>
        Income Transaction
      </h1>
      <Table bordered hover>
        <thead style={{ borderColor: "#828282" }}>
          <tr style={{ backgroundColor: "#E5E5E5" }}>
            <th>No</th>
            <th>Name</th>
            <th>Address</th>
            <th>Pos Code</th>
            <th>Income</th>
            <th>Status</th>
            <th style={{ textAlign: "center" }}>Action</th>
          </tr>
        </thead>
        <tbody style={{ borderColor: "#828282" }}>
          <tr style={{ borderColor: "#828282" }}>
            <td>1</td>
            <td>Sugeng No Pants</td>
            <td>Cileungsi</td>
            <td>16820</td>
            <td style={{ color: "#061E99" }}>69.000</td>
            <td style={{ color: "#FF9900" }}>Waiting Approve</td>
            <td>
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-center"
              >
                <Button
                  className="w-50 p-0"
                  size="sm"
                  style={{ border: "white", backgroundColor: "#FF0742" }}
                >
                  Cancel
                </Button>
                <Button
                  className="w-50 p-0"
                  size="sm"
                  style={{ border: "white", backgroundColor: "#0ACF83" }}
                >
                  Approve
                </Button>
              </Stack>
            </td>
          </tr>
          <tr style={{ borderColor: "#828282" }}>
            <td>2</td>
            <td>Haris Gams</td>
            <td>Serang</td>
            <td>42111</td>
            <td style={{ color: "#061E99" }}>30.000</td>
            <td style={{ color: "#78A85A" }}>Success</td>
            <td className="d-flex justify-content-center">
              <img src={Approve} style={{ width: "20px" }}></img>
            </td>
          </tr>
          <tr style={{ borderColor: "#828282" }}>
            <td>3</td>
            <td>Aziz Union</td>
            <td>Bekasi</td>
            <td>13450</td>
            <td style={{ color: "#061E99" }}>28.000</td>
            <td style={{ color: "#E83939" }}>Cancel</td>
            <td className="d-flex justify-content-center">
              <img src={Cancel} style={{ width: "20px" }}></img>
            </td>
          </tr>
          <tr style={{ borderColor: "#828282" }}>
            <td>4</td>
            <td>Lae Tanjung Balai</td>
            <td>Tanjung Balai</td>
            <td>21331</td>
            <td style={{ color: "#061E99" }}>30.000</td>
            <td style={{ color: "#00D1FF" }}>On The Way</td>
            <td className="d-flex justify-content-center">
              <img src={Approve} style={{ width: "20px" }}></img>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Transaction;
