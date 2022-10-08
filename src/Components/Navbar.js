import React, { Component } from 'react'

import '../Styles/Navbar.css';

import logo from '../images/logo_kasa.png'

class Navbar extends Component {

  render() {

    return (

      <div className='navBar'>
            <img src={logo} alt='logo' />

            <ul className='Liste_menu'>
                <li> <a href='#'> Accueil </a> </li>
                <li> <a href='#'> A propos </a> </li>
            </ul>
      </div>
    )
  }
}
export default Navbar
