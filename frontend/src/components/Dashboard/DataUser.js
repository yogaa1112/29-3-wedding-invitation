import React, { useState } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Table,
  Form,
} from "react-bootstrap";
import { PersonCircle, Trash } from "react-bootstrap-icons";

function DataUser() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Mark",
      email: "mark@example.com",
      password: "@mdo",
      whatsapp: "654",
    },
    {
      id: 2,
      name: "Jacob",
      email: "jacob@example.com",
      password: "@fat",
      whatsapp: "20531",
    },
    {
      id: 3,
      name: "Larry the Bird",
      email: "larry@example.com",
      password: "@twitter",
      whatsapp: "898",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
    whatsapp: "",
  });

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleAddUser = () => {
    setData([...data, { id: data.length + 1, ...newUser }]);
    setShowModal(false);
    setNewUser({ name: "", email: "", password: "", whatsapp: "" });
  };

  const handleDeleteUser = (id) => {
    setData(data.filter((user) => user.id !== id));
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container fluid className="my-5">
      <h3>Data User</h3>
      <Row className="align-items-center">
        <Col md={6} className="mb-3">
          <Form.Control
            type="text"
            placeholder="Search"
            value={search}
            onChange={handleSearch}
          />
        </Col>
        <Col md={6} className="text-md-end">
          <Button variant="primary" onClick={() => setShowModal(true)}>
            Tambahkan User
          </Button>
        </Col>
      </Row>
      <div className="table-responsive mt-3">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>No Whatsapp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.whatsapp}</td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => handleDeleteUser(item.id)}
                  >
                    <Trash />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={newUser.password}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicWhatsapp">
              <Form.Label>No Whatsapp</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter whatsapp number"
                name="whatsapp"
                value={newUser.whatsapp}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddUser}>
            Tambahkan User
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DataUser;
