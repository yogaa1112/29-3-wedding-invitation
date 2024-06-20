import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

function Faq() {
  return (
    <section id="faq" className="faq py-5">
      <div className="container">
        <Container>
          <Row className="mb-5">
            <Col>
              <h2 className="section-title text-center mt-5">Frequently Asked Questions</h2>
              <p className="section-subtitle text-center mb-3 opacity-50">"Pertanyaan yang Sering Ditanyakan"</p>
            </Col>
          </Row>
          <Row className="row-cols-1 g-4">
            <Col>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                    Apa saja yang diperlukan untuk membuat undangan pernikahan online?
                  </Accordion.Header>
                  <Accordion.Body>
                    Membuat undangan pernikahan online sangat mudah! Anda hanya perlu registrasi di website kami dan mengisi identitas sesuai dengan form yang disediakan. Selanjutnya, Anda dapat memilih template yang diinginkan, mengunggah foto, dan mengisi detail acara. Prosesnya cepat dan sederhana, sehingga Anda dapat memiliki undangan yang menarik hanya dalam hitungan menit!
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                    Apakah kita sebagai Customer bisa Kustom Tema?
                  </Accordion.Header>
                  <Accordion.Body>
                    Tentu saja! Kami memahami bahwa setiap pasangan memiliki selera yang unik. Oleh karena itu, kami menawarkan berbagai pilihan tema yang dapat dikustomisasi sesuai keinginan Anda. Apakah Anda ingin tema yang elegan, klasik, modern, atau sesuai dengan tema pernikahan Anda? Kami siap membantu Anda menciptakan undangan yang sempurna dan mencerminkan gaya pribadi Anda.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                    Aktif Berapa lama Website undangan ini?
                  </Accordion.Header>
                  <Accordion.Body>
                    Website undangan kami dapat aktif hingga satu tahun. Ini memberikan Anda fleksibilitas untuk membagikan undangan kepada keluarga dan teman-teman, serta memberi mereka cukup waktu untuk RSVP dan menyimpan tanggal pernikahan Anda. Setelah satu tahun.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <FontAwesomeIcon icon={faQuestionCircle} className="me-2" />
                    Apakah ada manfaat ramah lingkungan dengan memilih undangan digital?
                  </Accordion.Header>
                  <Accordion.Body>
                    Tentu saja! Dengan memilih undangan digital, Anda turut serta dalam menjaga kelestarian lingkungan. Undangan digital mengurangi penggunaan kertas dan limbah, serta menghemat energi yang biasanya digunakan untuk produksi dan pengiriman undangan fisik. Selain itu, undangan digital juga memungkinkan Anda untuk melakukan pembaruan secara real-time tanpa harus mencetak ulang. Mari bersama-sama menjaga bumi dengan memilih solusi yang lebih ramah lingkungan!
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Faq;
