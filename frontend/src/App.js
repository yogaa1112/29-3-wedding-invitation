import React, { useState } from "react";
import "./App.css";
import Header from "./components/LandingPage/Header";
import Home from "./components/LandingPage/section/Home";
import InvitationForm from "./components/LandingPage/InvitationForm";
import SignUpForm from "./components/LandingPage/SignUpForm";
import Login from "./components/LandingPage/LoginForm";
import About from "./components/LandingPage/section/About";
import Fitur from "./components/LandingPage/section/Fitur";
import Produk from "./components/LandingPage/section/Produk";
import Paket from "./components/LandingPage/section/Paket";
import Album from "./components/LandingPage/section/Album";
import Faq from "./components/LandingPage/section/Faq";
import Footer from "./components/LandingPage/Footer";

function App() {
  const [showInvitationForm, setShowInvitationForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [user, setUser] = useState(null);

  const handleShowInvitationForm = () => {
    setShowInvitationForm(true);
    setShowSignUpForm(false);
    setShowLoginForm(false);
  };

  const handleShowSignUpForm = () => {
    setShowInvitationForm(false);
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  const handleShowLoginForm = () => {
    setShowInvitationForm(false);
    setShowSignUpForm(false);
    setShowLoginForm(true);
  };

  const handleLogin = (userData) => {
    setUser(userData);
    setShowLoginForm(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const handleHideForms = () => {
    setShowInvitationForm(false);
    setShowSignUpForm(false);
    setShowLoginForm(false);
  };

  return (
    <div className="App">
      <Header
        onSignUpClick={handleShowSignUpForm}
        onLoginClick={handleShowLoginForm}
        onLogoutClick={handleLogout}
        user={user}
      />
      {showInvitationForm && <InvitationForm onClose={handleHideForms} />}
      {showSignUpForm && (
        <SignUpForm onClose={handleHideForms} onLogin={handleShowLoginForm} />
      )}
      {showLoginForm && (
        <Login
          onClose={handleHideForms}
          onSignUp={handleShowSignUpForm}
          onLogin={handleLogin}
        />
      )}
      <Home
        onButtonClick={handleShowInvitationForm}
        onLoginClick={handleShowLoginForm}
        user={user}
      />
      <About />
      <Fitur />
      <Produk />
      <Paket />
      <Album />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
