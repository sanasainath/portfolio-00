import React from 'react';
import './service.css';
import { BiCheck } from 'react-icons/bi';

const Service = () => {
  return (
    <section id="service">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>MERN Stack Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-stack web application development using MongoDB, Express.js, React.js, and Node.js.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building responsive and dynamic user interfaces with React.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of RESTful APIs and backend services.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Creating interactive and user-friendly websites.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Implementing best practices in HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Optimizing websites for performance and SEO.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Database Management</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Designing and managing relational and non-relational databases.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Ensuring data security and integrity.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database optimization and query performance tuning.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Service;
