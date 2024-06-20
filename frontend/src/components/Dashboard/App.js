import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home';
import DataUser from './DataUser';
import DataAdmin from './DataAdmin';
import DataPemesanan from './DataPemesanan';
import Profile from './Profile';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import "./App.css"

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
  
      <div className='container-fluid min-vh-100'>
        <div className='row'>
          {toggle && (
            <div className='col-2 bg-white vh-100 position-fixed'>
              <Sidebar />
            </div>
          )}
          <div className='col-2'></div>
          <div className='col'>
            <Routes>
              <Route path="/" element={<Home Toggle={Toggle} />} />
              <Route path="/data-user" element={<DataUser />} />
              <Route path="/data-admin" element={<DataAdmin />} />
              <Route path="/data-pemesanan" element={<DataPemesanan />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
  );
}

export default App;
