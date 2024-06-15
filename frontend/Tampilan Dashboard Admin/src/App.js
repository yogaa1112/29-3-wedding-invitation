import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Sidebar from './Sidebar';
import Home from './Home';
import DataUser from './DataUser';
import DataPemesanan from './DataPemesanan';
import Profile from './Profile';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [toggle, setToogle] = useState(true);
  const Toggle = () => {
    setToogle(!toggle);
  };
  return (
    <Router>
      <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
          {toggle && <div className='col-2 bg-white vh-100 position-fixed'>
            <Sidebar />
          </div>}
          <div className='col-2'></div>
          <div className='col'>
            <Routes>
              <Route path="/" element={<Home Toggle={Toggle} />} />
              <Route path="/data-user" element={<DataUser />} />
              <Route path="/data-pemesanan" element={<DataPemesanan />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
