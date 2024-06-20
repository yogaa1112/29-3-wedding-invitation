import React, { useState, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Produk() {
  useEffect(() => {
    AOS.init({ duration: 900 }); // Inisialisasi AOS dengan durasi animasi 1000ms
  }, []);

  const products = [
    {
      imgSrc:
        "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/romeo%20juliet.jpg?raw=true",
      title: "Romeo & Juliet",
    },
    {
      imgSrc:
        "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/Love%20Story.png?raw=true",
      title: "Love Story",
    },
    {
      imgSrc:
        "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/a%20little%20piece%20of%20heaven.jpg?raw=true",
      title: "A Little Piece of Heaven",
    },
    {
      imgSrc:
        "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/first%20love.jpg?raw=true",
      title: "First Love",
    },
    {
      imgSrc:
        "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/Beautiful%20in%20white.png?raw=true",
      title: "Beautiful in White",
    },
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TEMA/Perfect.png?raw=true",
      title: "Perfect",
    },
  ];

  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    imgSrc: "",
    title: "",
  });

  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <section id="produk" className="produk py-5" data-aos="fade-up">
      <Container>
        <h2 className="section-title text-center m-5">Tema Undangan</h2>
        <Row>
          {products.map((product, index) => (
            <Col
              key={index}
              xs={12}
              md={6}
              lg={4}
              className="mb-4"
              data-aos="fade-up" // Tambahkan data-aos dengan animasi fade-up pada setiap card
            >
              <div className="card h-100 text-center product-card">
                <img
                  src={product.imgSrc}
                  className="card-img-top"
                  alt={product.title}
                />
                <div className="card-body d-flex flex-column justify-content-center">
                  <div className="overlay">
                    <h5 className="card-title">{product.title}</h5>
                    <Button
                      className="w-50 mx-auto"
                      variant="primary"
                      onClick={() => handleShow(product)}
                    >
                      Lihat
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>

        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold">
              {selectedProduct.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <img
              src={selectedProduct.imgSrc}
              className="img-fluid"
              alt={selectedProduct.title}
            />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default Produk;
