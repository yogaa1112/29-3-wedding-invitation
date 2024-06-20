import React from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function SignUpForm({ onClose, onLogin }) {
  return (
    <div className="form-popup">
      <Modal.Header closeButton onHide={onClose}>
        <Modal.Title className="modal-title text-center w-100">
          Sign Up
          <img
            src="https://github.com/mazdanwllsyh/mypersonal/blob/main/ME/nikahdongfavicon.png?raw=true"
            alt="Logo"
            className="form-logo ms-2"
          />
        </Modal.Title>
      </Modal.Header>
      <hr />
      <div className="form-container">
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="formNama">
                  <Form.Control
                    type="text"
                    placeholder="Nama Anda"
                    className="text-center"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    placeholder="E-mail Anda"
                    className="text-center"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="text-center"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formWhatsApp">
                  <Form.Control
                    type="number"
                    placeholder="Masukkan no. WhatsApp"
                    className="text-center"
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-75 m-2">
                  Daftar
                </Button>

                <p className="text-center mt-5 opacity-75">
                  Sudah memiliki Akun?
                </p>
                <Button variant="secondary" onClick={onLogin} className="w-75">
                  Login
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default SignUpForm;
