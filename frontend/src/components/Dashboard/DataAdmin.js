import React, { useState } from "react";
import { Modal, Button, Container, Table, Form } from "react-bootstrap";

function DataAdmin() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Admin One",
      email: "admin1@example.com",
      password: "admin1pass",
      whatsapp: "123456789",
    },
    {
      id: 2,
      name: "Admin Two",
      email: "admin2@example.com",
      password: "admin2pass",
      whatsapp: "987654321",
    },
    {
      id: 3,
      name: "Admin Three",
      email: "admin3@example.com",
      password: "admin3pass",
      whatsapp: "112233445",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newAdmin, setNewAdmin] = useState({
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
    setNewAdmin({ ...newAdmin, [name]: value });
  };

  const handleAddAdmin = () => {
    setData([...data, { id: data.length + 1, ...newAdmin }]);
    setShowModal(false);
    setNewAdmin({ name: "", email: "", password: "", whatsapp: "" });
  };

  const handleDeleteAdmin = (id) => {
    setData(data.filter((admin) => admin.id !== id));
  };

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container fluid className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Data Admin</h3>
        <Form.Control
          type="text"
          className="w-25"
          placeholder="Search"
          value={search}
          onChange={handleSearch}
        />
        <Button variant="primary" onClick={() => setShowModal(true)}>
          Tambahkan Admin
        </Button>
      </div>
      <div className="table-responsive">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Password</th>
              <th scope="col">No Whatsapp</th>
              <th scope="col">Actions</th>
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
                    onClick={() => handleDeleteAdmin(item.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Tambahkan Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newAdmin.name}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={newAdmin.email}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={newAdmin.password}
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>No Whatsapp</Form.Label>
              <Form.Control
                type="text"
                name="whatsapp"
                value={newAdmin.whatsapp}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddAdmin}>
            Tambahkan Admin
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default DataAdmin;
