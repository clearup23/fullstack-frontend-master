import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "./Style.css";

function Navbar() {
  return (
    <section id="header1" className="navbar">
      <a>
        <img src={logo} />
      </a>
      {/* <div class="title"> CLEARUP</div> */}

      <div>
        <ul id="nav-links">
          <li className="ctn">
            {/* <a href="/">Home</a> */}
            <Link to="/Home">Home</Link>
          </li>
          <li className="ctn">
            <Link to="/CommunityChat">Post Questions</Link>

            {/* <a href="CommunityChat.html">Post a Question</a> */}
          </li>
          <li className="ctn">
            <Link to="/Videos">Videos</Link>
          </li>
          <li className="ctn">
            <Link to="/Connect">Connect</Link>
          </li>
          <li className="ctn">
            <Link to="/Signup">Signup</Link>
          </li>

          <li className="ctn">
            <Link to="/Signin">Login</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Navbar;
