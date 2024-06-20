import React, { useState } from "react";

function Profile() {
  const [name, setName] = useState("John Doe");
  const [nickname, setNickname] = useState("Johnny");
  const [email, setEmail] = useState("john.doe@example.com");
  const [password, setPassword] = useState("");
  const [isEditing, setIsEditing] = useState(true);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="container my-5">
      <h2 className="my-5">Data User</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="img-fluid mb-3"
          />
          <h4>{name}</h4>
        </div>
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={handleUpdate}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  ) : (
                    <p>{name}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="nickname" className="form-label">
                    Nickname
                  </label>
                  {isEditing ? (
                    <input
                      type="text"
                      className="form-control"
                      id="nickname"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      required
                    />
                  ) : (
                    <p>{nickname}</p>
                  )}
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  {isEditing ? (
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  ) : (
                    <p>{email}</p>
                  )}
                </div>
                {isEditing && (
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Ubah Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                )}
                <div className="text-end">
                  {isEditing && (
                    <button
                      type="button"
                      className="btn btn-danger me-2"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  )}
                  {!isEditing ? (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleEdit}
                    >
                      Edit
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  )}
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
