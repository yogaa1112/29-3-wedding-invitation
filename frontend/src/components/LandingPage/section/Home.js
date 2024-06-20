import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Home({ onButtonClick, onLoginClick, user }) {
  const handleButtonClick = () => {
    if (user) {
      onButtonClick(); // Tampilkan form jika sudah login
    } else {
      onLoginClick(); // Tampilkan login jika belum login
    }
  };

  const carouselImages = [
    "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/romeo%20juliet.jpg?raw=true",
    "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/Love%20Story.png?raw=true",
    "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/a%20little%20piece%20of%20heaven.jpg?raw=true",
    "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/first%20love.jpg?raw=true",
    "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/Beautiful%20in%20white.png?raw=true",
    "https://github.com/yogaa1112/29-3-wedding-invitation/blob/main/frontend/assets/TEMA/Perfect.png?raw=true",
  ];

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 text-center">
            <Carousel className="dark mt-4">
              {carouselImages.map((src, index) => (
                <Carousel.Item key={index}>
                  <img
                    src={src}
                    className="App-logo d-cover w-50"
                    alt={`Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="col-lg-6 order-lg-1 align-items-center text-center">
            <h1 className="section-title text-center fw-bold">Website Pembuatan Undangan Nikah Online</h1>
            <p>
              Undang Keluarga, Kerabat terdekat, atau Bestie<br></br> dengan
              undangan yang menarik dan kekinian.
            </p>
            <button onClick={handleButtonClick}>Buat Undangan</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
