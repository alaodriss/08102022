import React, { Component } from 'react'
import '../Styles/footer.css';
import logo from '../Images/Logo_footer.png'

class Footer extends Component {
  render() {
    return (
      <div  className='footer_bg'>
        <div  className='footer_info'>
            <img src={logo} alt='Logo_footer' />
            <p className='copyrt'>© 2020 Kasa. All rights reserved</p>
        </div>
      </div>
    )
  }
}
export default Footer