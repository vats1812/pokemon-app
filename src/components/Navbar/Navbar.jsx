import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="title">
            <img src={logo} alt="logo" />
            <h1>PokeSearch</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
