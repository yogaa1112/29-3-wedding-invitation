import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button, Table } from "react-bootstrap";
import { PeopleFill, CartPlus, Person } from "react-bootstrap-icons";

function Home({ Toggle }) {
  return (
    <Container fluid className="px-3 py-4">
      <Nav Toggle={Toggle} />
      <h2>Dashboard</h2>
      <Row className="g-3 my-2">
        <Col xs={12} md={4}>
          <Card className="shadow-sm text-center p-3">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="fs-2">10</Card.Title>
                <Card.Text className="fs-5">User</Card.Text>
              </div>
              <PeopleFill size={50} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="shadow-sm text-center p-3">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="fs-2">10</Card.Title>
                <Card.Text className="fs-5">Total Pemesanan</Card.Text>
              </div>
              <CartPlus size={50} />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="shadow-sm text-center p-3">
            <Card.Body className="d-flex justify-content-between align-items-center">
              <div>
                <Card.Title className="fs-2">230</Card.Title>
                <Card.Text className="fs-5">Admin</Card.Text>
              </div>
              <Person size={50} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Data User</h3>
        <Link to="/data-user">
          <Button variant="success">Selengkapnya</Button>
        </Link>
      </div>

      <Table responsive bordered striped>
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>No Whatsapp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Kuncoro S.T</td>
            <td>Guscoro</td>
            <td>awewada</td>
            <td>08989889</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Akim Lee S.kom</td>
            <td>lilakimiee@gmail.com</td>
            <td>awewadada</td>
            <td>08989898</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Bagas aji S.Sn</td>
            <td>bagji@gmail.com</td>
            <td>asdwas</td>
            <td>08798782</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Home;
