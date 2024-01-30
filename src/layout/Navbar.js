// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "./UserContext";


const Navbar = () => {
  const { user, logout } = useUser();

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/post" className="nav-item">
        Post Questions
      </Link>
      <Link to="/video" className="nav-item">
        Video
      </Link>
      <Link to="/connect" className="nav-item">
        Connect
      </Link>

      {user ? (
        <>
          <span className="welcome-message">
            Welcome, {user.username} to ClearUp
          </span>
          <button onClick={logout} className="nav-item">
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/signup" className="nav-item">
            SignUp
          </Link>
          <Link to="/signin" className="nav-item">
            SignIn
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;
