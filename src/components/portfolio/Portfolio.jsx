import React from 'react'
import './portfolio.css'

const Portfolio = () => {
  return (
   <section id="portfolio">
<h5>My Recent Work</h5>
<h2>Portfolio</h2>
<div className='container portfolio__container'>
  <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src='/images/Screenshot 2024-06-02 231329.png' alt='About Img' />
      </div>
      <h3> </h3>
      <div className='check_components'>
    <span className='badge react'>React</span>
    <span className='badge bootstrap'>Bootstrap</span>
    <span className='badge node'>Node Js</span>
    <span className='badge mongodb'>MongoDB</span>
    
    
</div>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/sanasainath/Frontend-shoppingCart' className='btn'>GitHub</a>
      <a href='https://frontend-shopping-cart-pi.vercel.app' className='btn btn-primary'>Live Demo</a>
      </div>
   

  </article>
  <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src='/images/Screenshot 2024-07-09 142559.png' alt=''/>
    </div>
      <h3> </h3>
      <div className='check_components'>
    <span className='badge react'>React</span>
    <span className='badge bootstrap'>TailWind Css</span>
    <span className='badge node'>Node Js</span>
    <span className='badge mongodb'>MongoDB</span>
    <span className='badge mongodb'>Socket IO</span>
    
    
</div>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/sanasainath/MernChat-App' className='btn'>GitHub</a>
      <a href='https://chat-app-frontend-roan.vercel.app' className='btn btn-primary'>Live Demo</a>
      </div>
  

  </article>
  <article className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src='' alt='About Img' />
    </div>
      <h3>This is a portfolio item title</h3>
      <div className='portfolio__item-cta'>
      <a href='https://github.com/sanasainath/Ecommerce-Shopping-Cart' className='btn'>GitHub</a>
      <a href='https://github.com/sanasainath/Ecommerce-Shopping-Cart' className='btn btn-primary'>Live Demo</a>
      </div>

  </article>
</div>
   </section>
  )
}

export default Portfolio
