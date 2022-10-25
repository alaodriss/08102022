import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import logo from "../Images/logo_kasa.png";


class Navbar extends Component {
  render() {
    return (
 
        <div className="navBar">
          <img src={logo} alt="logo" />
          <nav className="Liste_menu">
            <Link className='linkTop' to="/">Accueil</Link>
            <Link className='linkTop' to="apropos">Apropos</Link>
          </nav>
        </div>
  
    );
  }
}
export default Navbar;
