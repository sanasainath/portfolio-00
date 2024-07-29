import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src='/images/7c2a8423-00de-4e00-9d39-98ee0e137b15 (1).jpg' alt='About Img' />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>CSE, 4th Year at RGUKT RK Valley</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon' />
              <h5>Projects</h5>
              <small>5+ Projects Completed</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Skills</h5>
              <small>MERN Stack, DSA,Java,Php</small>
            </article>
          </div>
          <p>
            I am S. SainathReddy, currently studying CSE 4th Year at RGUKT RK Valley Idupulapaya (Kadapa). 
            With a strong passion for web development, I have been honing my skills in MERN stack development through various projects and coursework. 
            My journey in the tech world has been driven by a constant desire to learn and innovate. I have worked on numerous projects, both individually 
            and as part of a team, which has helped me develop a solid foundation in web development. Additionally, I have solved numerous problems on LeetCode 
            and GeeksforGeeks, which has significantly improved my understanding of Data Structures and Algorithms. I am eager to continue my growth in the industry, 
            take on challenging projects, and contribute to the tech community.
          </p>
          <p>
            Outside of my academic and project work, I enjoy reading tech blogs, problem solving,watching english series and shows. These activities help me stay balanced and continuously improve my critical thinking and analytical skills.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
