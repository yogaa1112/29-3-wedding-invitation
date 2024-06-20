import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBars, FaTimes } from "react-icons/fa";
import UserSetting from "./UserSetting";
import Sidebar from "./Sidebar";

function Header({
  onSignUpClick,
  onLoginClick,
  onProfileClick,
  onLogoutClick,
  user,
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-custom sticky-top">
        <Container className="mx-auto d-flex justify-content-between">
          <Navbar.Brand href="#home" className="NavbarBrand-custom my-1">
            NikahDong.
            <span style={{ color: "#FF0000", fontFamily: "JetBrains Mono" }}>
              com
            </span>
          </Navbar.Brand>
          <div className="nav-buttons-wrapper d-flex align-items-center order-lg-2 ms-auto">
            <UserSetting
              onLoginClick={onLoginClick}
              onSignUpClick={onSignUpClick}
              onProfileClick={onProfileClick}
              onLogoutClick={onLogoutClick}
              user={user}
            />
            <div className="ms-2 d-lg-none d-flex" onClick={handleToggleSidebar}>
              {sidebarOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>
          </div>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="order-lg-1 w-100 d-none d-lg-flex"
          >
            <Nav className="ms-auto">
              <Nav.Link href="#home">Beranda</Nav.Link>
              <Nav.Link href="#about">Tentang Kami</Nav.Link>
              <Nav.Link href="#fitur">Fitur</Nav.Link>
              <Nav.Link href="#produk">Tema</Nav.Link>
              <Nav.Link href="#paket">Paket</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Sidebar show={sidebarOpen} onClose={handleCloseSidebar} />
    </>
  );
}

export default Header;
