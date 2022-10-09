import React from 'react'
import {Link} from "react-router-dom";
import {FaFacebook} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {FaYoutube} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import './Footer.css';

function AdminFooter() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join with us to receive our best products
        </p>
        <p className='footer-subscription-text'>
        Best Food Delivery Shop in Sri Lanka
        </p>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          

          <div class='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        
      </div>
      
      <section class='social-media'>
        <div class='social-media-wrap'>

        <div id='hdLogo'> 
                <img alt="Logo"  src={require("../images/Cafe.png")} width="110"  height="100" className="d-inline-block align-top" /> 
            </div>
            
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            Cafe SecretAlly
            </Link>
          </div>
          <small class='website-rights'> Cafe SecretAlly © 2022</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/Happy-Paws-100716186000033/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook/>
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram/>
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube/>
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter/>
            </Link>
            
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default AdminFooter
