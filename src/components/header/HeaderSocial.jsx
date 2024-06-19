import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sana-sainath-893a8b26b/" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com" target='_blank' rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://facebook.com" target='_blank' rel="noopener noreferrer"><FiDribbble /></a>
    </div>
  );
}

export default HeaderSocial;
