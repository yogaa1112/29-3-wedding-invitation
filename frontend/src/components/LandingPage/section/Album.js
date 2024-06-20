import React, { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Album() {
  useEffect(() => {
    AOS.init({ duration: 900 }); // Inisialisasi AOS dengan durasi animasi 1000ms
  }, []);

  const albums = [
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TESTI/akim%20debi.jpg?raw=true",
      title: "Akim dan Debi",
      review:
        "Sangat mudah digunakan, undangan pernikahan langsung bisa dibagikan dengan cepat!",
    },
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TESTI/mogy%20billa.jpg?raw=true",
      title: "Mogy dan Bila",
      review:
        "Di jaman digital sekarang ini undangan online pernikahan sangat membantu sekali.",
    },
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TESTI/nanzy%20kharisme.jpg?raw=true",
      title: "Nanzy dan Kharisma",
      review:
        "Baru kali ini ada platform undangan online pernikahan yang simple!",
    },
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TESTI/testi%20aji%20mae.jpg?raw=true",
      title: "Kuncoro dan Mae",
      review: "Mudah digunakan dan banyak sekali pilihan templatenya.",
    },
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TESTI/testi%20chris%20chelle.jpg?raw=true",
      title: "Chris dan Chelle",
      review: "UI sangat simple mudah digunakan dan banyak pilihan template.",
    },
    {
      imgSrc:
        "https://github.com/mazdanwllsyh/myBalsamiq/blob/main/TESTI/testi%20udin%20loli.jpg?raw=true",
      title: "Udin dan Loli",
      review: "Recomended deh pokoknya WKWKWKW.",
    },
  ];

  return (
    <section id="album" className="album py-5">
      <Container>
        <h2 className="section-title text-center mt-5">Album</h2>
        <p className="section-subtitle text-center mb-5 opacity-50">
          "Testimonials Pengguna"
        </p>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {albums.map((album, index) => (
            <Col
              key={index}
              data-aos="fade-down"
              data-aos-delay={`${index * 150}`}
            >
              <Card className="h-100 text-center album-card">
                <Card.Img variant="top" src={album.imgSrc} alt={album.title} />
                <Card.Body>
                  <Card.Title>{album.title}</Card.Title>
                  <Card.Text>{album.review}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Album;
