import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from  'react-icons/io'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
 <footer>
  <a href='#' className='footer__logo'> Home</a>
  <ui className='per__links'>


  <li> <a href='#about'>About</a></li>
 <li><a href='#experiences'>experiences</a></li>
 <li> <a href='#service'>service</a></li>
 <li><a href='#portfolio'>portfolio</a></li>
 <li><a href='#testimonials'>testimonials</a></li>
 <li><a href='#contact'>contact</a></li>
 </ui>
 <div className='socio__icons'>
 <a href="https://www.linkedin.com/in/sana-sainath-893a8b26b/" target='_blank'><BsLinkedin/></a>
 <a href="https://github.com" target='_blank'><FaGithub/></a>

  <a href='https://facebook.com'><FaFacebookF/></a>
  <a href='https://instagram.com'><FiInstagram/></a>
  <a href='https://twitter.com'><IoLogoTwitter/></a>
 </div>
 <div className='footer__end'>
<small>...Developed By SanaSainath.......</small>

 </div>

  
 
  



 </footer>
  )
}

export default Footer
