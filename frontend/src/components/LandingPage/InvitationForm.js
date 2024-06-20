import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function InvitationForm({ onClose }) {
  const [selectedPaket, setSelectedPaket] = useState("");
  const [website, setWebsite] = useState("NikahDong.com");

  const handlePaketChange = (event) => {
    const value = event.target.value;
    setSelectedPaket(value);
    if (value === "Paket 1" || value === "Paket 2") {
      setWebsite("NikahDong.com");
    } else if (value === "Paket 3") {
      setWebsite("");
    }
  };

  return (
    <div className="form-popup">
      <Modal.Header closeButton onHide={onClose}>
        <Modal.Title className="modal-title text-center w-100">
          Buat Undangan
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
                {selectedPaket === "Paket 3" && (
                  <Form.Group controlId="formWebsite">
                    <Form.Control
                      type="text"
                      placeholder="Masukkan domain website custom anda"
                      className="text-center"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </Form.Group>
                )}

                <Form.Group controlId="formPria">
                  <Form.Control
                    type="text"
                    placeholder="Nama Mempelai Pria"
                    className="text-center"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formWanita">
                  <Form.Control
                    type="text"
                    placeholder="Nama Mempelai Wanita"
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

                <Form.Group controlId="formWhatsApp">
                  <Form.Control
                    type="number"
                    placeholder="Masukkan no. WhatsApp"
                    className="text-center"
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formTanggal">
                  <label className="float-start opacity-50">
                    Tanggal Pernikahan :
                  </label>
                  <Form.Control type="date" className="text-center" required />
                </Form.Group>

                <Form.Group controlId="formPaket">
                  <Form.Control
                    as="select"
                    defaultValue=""
                    className="text-center"
                    onChange={handlePaketChange}
                    required
                  >
                    <option value="" disabled>
                      - - Pilih Paket Anda - -
                    </option>
                    <option value="Paket 1">Paket 1</option>
                    <option value="Paket 2">Paket 2</option>
                    <option value="Paket 3">Paket 3</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formTema">
                  <Form.Control
                    as="select"
                    defaultValue=""
                    className="text-center"
                    required
                  >
                    <option value="" disabled>
                      - - Pilih Tema Anda - -
                    </option>
                    <option>Romeo Juliet</option>
                    <option>Love Story</option>
                    <option>A Little Piece of Heaven</option>
                    <option>First Love</option>
                    <option>Beautiful in White</option>
                    <option>Perfect</option>
                  </Form.Control>
                </Form.Group>

                <Button
                  variant="secondary"
                  type="submit"
                  className="w-75 m-2 fw-bold"
                >
                  Buat Undangan
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default InvitationForm;
