import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='bg-white sidebar p-2'>
      <div className='m-2'>
        <i className='bi bi-people me-3 fs-4'></i>
        <span className='brand-name fs-4'>Agus</span>
      </div>
      <hr className='text-dark'/>
      <div className='list-group list-group-flush'>
        <Link to="/" className='list-group-item py-2'>
          <i className='bi bi-speedometer2 fs-5 me-3'></i>
          <span className='fs-5'>Dashboard</span>
        </Link>
        <Link to="/data-user" className='list-group-item py-2'>
          <i className='bi bi-person fs-5 me-3'></i>
          <span className='fs-5'>Data User</span>
        </Link>
        <Link to="/data-pemesanan" className='list-group-item py-2'>
          <i className='bi bi-cart fs-5 me-3'></i>
          <span className='fs-5'>Data Pemesanan</span>
        </Link>
        <Link to="/profile" className='list-group-item py-2'>
          <i className='bi bi-person-circle fs-5 me-3'></i>
          <span className='fs-5'>Profile</span>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
