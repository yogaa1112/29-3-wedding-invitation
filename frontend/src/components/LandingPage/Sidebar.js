import React from "react";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar({ show, onClose }) {
  return (
    <div className={`sidebar ${show ? "show" : ""}`}>
      <Nav className="flex-column d-lg-none m-2">
        <Nav.Link href="#home" onClick={onClose}>Beranda</Nav.Link>
        <Nav.Link href="#about" onClick={onClose}>Tentang Kami</Nav.Link>
        <Nav.Link href="#fitur" onClick={onClose}>Fitur</Nav.Link>
        <Nav.Link href="#produk" onClick={onClose}>Tema</Nav.Link>
        <Nav.Link href="#paket" onClick={onClose}>Paket</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
