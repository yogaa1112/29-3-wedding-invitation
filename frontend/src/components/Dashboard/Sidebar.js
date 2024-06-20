import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`dashboard-sidebar ${
          isOpen ? "dashboard-sidebar-open" : ""
        }`}
      >
        <div className="m-2">
          <span className="brand-name">NikahDong.com</span>
        </div>
        <hr className="text-dark" />
        <div className="list-group list-group-flush">
          <Link to="/admin" className="list-group-item py-2">
            <i className="bi bi-house fs-5 me-3"></i>
            <span className="fs-5">Dashboard</span>
          </Link>
          <Link to="/admin/data-user" className="list-group-item py-2">
            <i className="bi bi-people fs-5 me-3"></i>
            <span className="fs-5" >Data User</span>
          </Link>
          <Link to="/admin/data-pemesanan" className="list-group-item py-2">
            <i className="bi bi-cart fs-5 me-3"></i>
            <span className="fs-5">Data Pemesanan</span>
          </Link>
          <Link to="/admin/data-admin" className="list-group-item py-2">
            <i className="bi bi-person fs-5 me-3"></i>
            <span className="fs-5">Data Admin</span>
          </Link>
          <Link to="/admin/profile" className="list-group-item py-2">
            <i className="bi bi-person-circle fs-5 me-3"></i>
            <span className="fs-5">Profile</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
