import React from 'react';
import '../MySkills/MySkills.css';

export const MySkills = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <h2 className="skills-title">My Skills</h2>
      <div className='skills'>
        <div className='skills-icons'>
            <img src="/img/Reactjs.png"  alt="" />
            <img src="/img/HTML.png" alt="" />
            <img src="/img/CSS.png" alt="" />
            <img src="/img/Angular.png" alt="" />
            <img src="/img/Nodejs.png" alt="" />
            <img src="/img/MongoDB.png" alt="" />
            <img src="/img/MYSQL.png" alt="" />
            <img src="/img/JavaScript.png" alt="" />
            <img src="/img/expressjs.png" alt="" />
            <img src="/img/tailwind.png" alt="" />
        </div>
        <ul className="skills-list">
          <li><strong>Front-End:</strong> HTML, CSS, Tailwind, JavaScript, React, Angular</li>
          <li><strong>Back-End:</strong> Node.js, Express, , Django</li>
          <li><strong>Databases:</strong> MySQL, PostgreSQL, MongoDB</li>
          <li><strong>Tools & Platforms:</strong> Git, , AWS, </li>
          <li><strong>Others:</strong> RESTful APIs, GraphQL</li>
      </ul>
      </div>
      
    </div>
  );
};
