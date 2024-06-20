import React from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function LoginForm({ onClose, onSignUp }) {
  return (
    <div className="form-popup">
      <Modal.Header closeButton onHide={onClose}>
        <Modal.Title className="modal-title text-center w-100">
          Login
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
                <Form.Group controlId="formUsername">
                  <Form.Control
                    type="text"
                    placeholder="Username"
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

                <Button variant="primary" type="submit" className="w-75 m-2">
                  Login
                </Button>

                <p className="text-center mt-5 opacity-75">
                  Belum memiliki akun?
                </p>
                <Button variant="secondary" onClick={onSignUp} className="w-75">
                  Sign Up
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default LoginForm;
