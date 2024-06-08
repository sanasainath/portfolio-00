import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Nav = () => {
  const [activeLink, setActiveLink] = useState('#'); // State to track active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <nav>
      <a
        href='#'
        className={activeLink === '#' ? 'active' : ''}
        onClick={() => handleLinkClick('#')}
      >
        <AiOutlineHome />
      </a>
      <a
        href='#about'
        className={activeLink === '#about' ? 'active' : ''}
        onClick={() => handleLinkClick('about')}
      >
        <AiOutlineUser />
      </a>
      <a
        href='#experiences'
        className={activeLink === '#experiences' ? 'active' : ''}
        onClick={() => handleLinkClick('experiences')}
      >
        <BiBook />
      </a>
      <a
        href='#service'
        className={activeLink === '#service' ? 'active' : ''}
        onClick={() => handleLinkClick('service')}
      >
        <RiServiceLine />
      </a>
      <a
        href='#contact'
        className={activeLink === '#contact' ? 'active' : ''}
        onClick={() => handleLinkClick('contact')}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
  