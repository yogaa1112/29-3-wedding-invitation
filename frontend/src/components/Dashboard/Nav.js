import React from 'react';
import 'bootstrap/js/dist/dropdown';

function Nav({ Toggle }) {
  return (
    <nav className="navbar navbar-expand-sm bg-transparent shadow-none">
      <i className="navbar-brand d-lg-none bi bi-justify-left fs-4" onClick={Toggle}></i>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
    </nav>
  );
}

export default Nav;
