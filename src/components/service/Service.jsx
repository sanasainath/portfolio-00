import React from 'react'
import './service.css'
import {BiCheck} from 'react-icons/bi'
const Service = () => {
  return (
   <section id="service">
   <h5>What I Offer</h5>
   <h2>Services</h2>
   <div className='container services__container'>
    <article className='service'>
      <div className='service__head'>
        <h3>MERN STACK DEV</h3>

      </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list__icon'/>
          <p> jaaaaaaaaaaa</p>

        </li>
        <li>
        <BiCheck className='service__list__icon'/>
        <p> jaaaaaaaaaaa</p>
        </li>
        <li>
        <BiCheck className='service__list__icon'/>
        <p> jaaaaaaaaaaaa</p>
        </li>
      </ul>
    </article>
    <article className='service'>
      <div className='service__head'>
        <h3> DEV</h3>

      </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list__icon'/>
          <p> jaaaaaaaaaaaaaaaaaaaa</p>

        </li>
        <li>
        <BiCheck className='service__list__icon'/>
          <p> jaaaaaaaaaaaaaaaa</p>

        </li>
        <li>
        <BiCheck className='service__list__icon'/>
          <p> jaaaaaaaaaaaaaaa</p>

        </li>
      </ul>
    </article>
    <article className='service'>
      <div className='service__head'>
        <h3>STACK </h3>

      </div>
      <ul className='service__list'>
        <li>
          <BiCheck className='service__list__icon'/>
          <p> jaaaaaaaaaaaaaaaaaa</p>

        </li>
        <li>
        <BiCheck className='service__list__icon'/>
        <p> jaaaaaaaaaa</p>
        </li>
        <li>
        <BiCheck className='service__list__icon'/>
        <p> jaaaaaaaaaaaaa</p>
        </li>
      </ul>
    </article>
   </div>
   </section>
  )
}

export default Service
