import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi' 
import {VscFolderLibrary} from 'react-icons/vsc' 


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
          <img src='/images/portfolio2.jpg' alt='About Img' />
          </div>

        </div>
        <div className="about__content">
         <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ wokring</small>

          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
          <h5>client</h5>
          <small></small>

          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ wokring</small>

          </article>
         </div>
         <p>
          i ajdmsijndjjnsdjnfdjsndjsndfjnfdjdnksfknjsd console.debug(kjsnjfsdnjwdnjsnjdsnjfn);
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
