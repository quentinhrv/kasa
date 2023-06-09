import React from 'react';
import './_footer.scss';
import footer from '../../assets/logo_footer.png'


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-logo' >
            <img src={footer} alt='Logo footer' />
      </div>
      <p className='footer-text'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer