import React, { useState } from "react";
import { Modal, Button, Dropdown, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

function UserSetting({ onLoginClick, onSignUpClick, onLogoutClick, user }) {
  const [showProfile, setShowProfile] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: user ? user.name : "",
    nickname: user ? user.nickname : "",
    email: user ? user.email : "",
    password: "",
  });

  const handleProfileClick = () => {
    setShowProfile(true);
  };

  const handleCloseProfile = () => {
    setShowProfile(false);
    setEditMode(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleUpdateProfile = () => {
    // Add your update profile logic here
    setEditMode(false);
  };

  return (
    <>
      <Dropdown>
        <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
          <FontAwesomeIcon icon={faUser} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {!user && <Dropdown.Item onClick={onLoginClick}>Login</Dropdown.Item>}
          {!user && (
            <Dropdown.Item onClick={onSignUpClick}>Sign Up</Dropdown.Item>
          )}
          {user && (
            <Dropdown.Item onClick={handleProfileClick}>
              Profile Settings
            </Dropdown.Item>
          )}
          {user && (
            <Dropdown.Item onClick={onLogoutClick}>Logout</Dropdown.Item>
          )}
        </Dropdown.Menu>
      </Dropdown>

      <Modal show={showProfile} onHide={handleCloseProfile}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title text-center w-100">
            Profile Settings
            <img
              src="https://github.com/mazdanwllsyh/mypersonal/blob/main/ME/nikahdongfavicon.png?raw=true"
              alt="Logo"
              className="form-logo ms-2"
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {user ? (
            editMode ? (
              <Form>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNickname">
                  <Form.Label>Nickname</Form.Label>
                  <Form.Control
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form>
            ) : (
              <>
                <p>
                  <strong>Name:</strong> {user.name}
                </p>
                <p>
                  <strong>Nickname:</strong> {user.nickname}
                </p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
              </>
            )
          ) : (
            <p>Loading...</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          {editMode ? (
            <>
              <Button variant="secondary" onClick={handleCloseProfile}>
                Cancel
              </Button>
              <Button variant="primary" onClick={handleUpdateProfile}>
                Update Profile
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={handleCloseProfile}>
                Close
              </Button>
              <Button variant="primary" onClick={handleEditProfile}>
                Edit Profile
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default UserSetting;
