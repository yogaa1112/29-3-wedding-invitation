import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({
      name,
      nickname,
      email,
      password,
      confirmPassword
    });
  };

  return (
    
    <div className="container my-5">
        <h2 className='my-5'>Data User</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Profile" 
            className="img-fluid mb-3"
          />
          <h4 cl>User Name</h4>
        </div>
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="nickname" className="form-label">Nickname</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="nickname" 
                    value={nickname} 
                    onChange={(e) => setNickname(e.target.value)} 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Ubah Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Konfirmasi Password</label>
                  <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                  />
                </div>
                <div className="text-end">
                  <button type="submit" className="btn btn-primary">Update</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
