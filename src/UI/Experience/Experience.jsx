import React from 'react';
import "../Experience/Experience.css";

export const Experience = () => {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      
      <p className="experience-summary"> <span className='exper-span'>3+ years of passion</span>  for <br /> programming techniques</p>
      <div className='experience-box'>
      <div className="experience-list">
        <div className="experience-item">
          <img src="/img/MicroTech.jpeg" alt="" />
          <div className='exp-details'>
          <h2 className="company-name">MicroTech</h2>
          <p className="company-duration">2024-Present</p>
          </div>
        </div>
        
        <div className="experience-item">
            <img src="/img/softlogic.jpeg" alt="" />
          <div className='exp-details'>
          <h2 className="company-name">SoftLogic</h2>
          <p className="company-duration">2022-2023</p>
          </div>
          
        </div>
        
        <div className="experience-item">
          <img src="/img/ITech.jpeg" alt="" />
          <div className='exp-details'>
          <h2 className="company-name">ITech Sol</h2>
          <p className="company-duration">2021-2022</p>
          </div>
          
        </div>
        
        <div className="experience-item">
          <img src="/img/idevsol.jpeg" alt="" />
        <div className='exp-details'>
        <h2 className="company-name">Devini Sol</h2>
        <p className="company-duration">2020-Present</p>
        </div>
          
        </div>
      </div>
      
      <div className="role-details">
        <h2 className="role-title">Senior Software Engineer</h2>
        
        <ul className="role-description">
          <li>Led development of scalable web applications, <br /> improving performance and user experience <br /> for millions of users.</li>
          <li>Implemented machine learning algorithms to enhance <br /> search functionality.</li>
          <li>Collaborated with cross-functional teams to <br /> integrate new features seamlessly.</li>
        </ul>
        
        <div className="skills-container">
          <span className="skill">Python</span>
          <span className="skill">Tensorflow</span>
          <span className="skill">Angular</span>
          <span className="skill">Kubernetes</span>
          <span className="skill">GCP</span>
        </div>
      </div>
      </div>
    </div>
  );
};

