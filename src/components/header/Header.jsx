import React from 'react'
import './header.css'
import Cty from './Cty'

import HeaderSocial from './HeaderSocial'
import aimg from '../../images/me.png'
const Header = () => {
  return (
    <header>
      <div className=' container header__container'>

        <h5>Hello I'm</h5>
        <h1>Sana SainathReddy</h1>
        <h5 className='text-light'>
          Mernstack Developer
        </h5>
        <Cty/>
        <HeaderSocial/>
        <div className='me'>
        <img src={aimg} alt="me" />

        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
