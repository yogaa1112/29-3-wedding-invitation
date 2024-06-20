import React from "react";
import { Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer-bg-img" className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <Navbar.Brand
              onClick={scrollToTop}
              className="NavbarBrand-custom"
              style={{ cursor: "pointer" }} // Menambahkan pointer cursor untuk menunjukkan bahwa ini dapat diklik
            >
              NikahDong.
              <span style={{ color: "#FF0000", fontFamily: "JetBrains Mono" }}>
                com
              </span>
            </Navbar.Brand>
            <p className="mb-1">
              Undang Keluarga, Kerabat terdekat, atau Bestie<br /> dengan
              undangan yang menarik dan kekinian.
            </p>
            <div className="row justify-content-center align-items-center m-2">
              <div className="col-auto">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="text-decoration-none text-dark icon-custom"
                >
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
              </div>
              <div className="col-auto">
                <FontAwesomeIcon
                  icon={faEllipsisH}
                  size="lg"
                  className="text-light"
                />
              </div>
              <div className="col-auto">
                <a
                  href="https://wa.me/"
                  target="_blank"
                  className="text-decoration-none text-dark icon-custom"
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                </a>
              </div>
            </div>
            <hr className="my-3" /> {/* Garis */}
            <p className="text-center">
              &copy; 2024 NikahDong.com . All Right Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
