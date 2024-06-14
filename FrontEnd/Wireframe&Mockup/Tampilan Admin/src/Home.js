import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

function Home({ Toggle }) {
  return (
    <div className="px-3">
      <Nav Toggle={Toggle} />
      <h2>Dashboard</h2>
      <div className="container-fluid">
        <div className="row g-3 my-2">
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">10</h3>
                <p className="fs-5">User</p>
              </div>
              <i className="bi bi-people-fill p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">10</h3>
                <p className="fs-5">Total Pemesanan</p>
              </div>
              <i className="bi bi-cart-plus p-3 fs-1"></i>
            </div>
          </div>
          <div className="col-md-4 p-1">
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              <div>
                <h3 className="fs-2">230</h3>
                <p className="fs-5">Admin</p>
              </div>
              <i className="bi bi-person p-3 fs-1"></i>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3>Data User</h3>
              <Link to="/data-user" className="btn btn-success">Selengkapnya</Link>
            </div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Password</th>
                  <th scope="col">No Whatsapp</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Kuncoro S.T</td>
                  <td>Guscoro</td>
                  <td>awewada</td>
                  <td>08989889</td>
                </tr>
                <tr>
                  <th scope="row">1</th>
                  <td>Kuncoro S.T</td>
                  <td>Guscoro</td>
                  <td>awewada</td>
                  <td>08989889</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Akim Lee S.kom</td>
                  <td>lilakimiee@gmail.com</td>
                  <td>awewadada</td>
                  <td>08989898</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Akim Lee S.kom</td>
                  <td>lilakimiee@gmail.com</td>
                  <td>awewadada</td>
                  <td>08989898</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bagas aji S.Sn</td>
                  <td>bagji@gmail.com</td>
                  <td>asdwas</td>
                  <td>08798782</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bagas aji S.Sn</td>
                  <td>bagji@gmail.com</td>
                  <td>asdwas</td>
                  <td>08798782</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Bagas aji S.Sn</td>
                  <td>bagji@gmail.com</td>
                  <td>asdwas</td>
                  <td>08798782</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
