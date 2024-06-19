import React from 'react';
import './footer.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
    
    <a href='#top' className='footer__logo'>Home</a>
      <ul className='per__links'>
        <li><a href='#about'>About</a></li>
        <li><a href='#experiences'>Experiences</a></li>
        <li><a href='#service'>Service</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='socio__icons'>
        <a href="https://www.linkedin.com/in/sana-sainath-893a8b26b/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://github.com" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://facebook.com" target='_blank' rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target='_blank' rel="noopener noreferrer"><FiInstagram /></a>
        <a href="https://twitter.com" target='_blank' rel="noopener noreferrer"><IoLogoTwitter /></a>
      </div>
      <div className='footer__end'>
        <small>...Developed By Sana Sainath.......</small>
      </div>
    </footer>
  );
}

export default Footer;
