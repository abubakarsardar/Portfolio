import React from 'react';
import '../Services/Services.css';
import ServiceAPI from '../../API/services.json';


const Services = () => {
  return (
    <div className="services-section">
      <p className="subtitle">What do I offer</p>
      <h1 className="title">
        Designing <span>Solutions</span> Customized to Meet Your <span>Requirements</span>
      </h1>
      <div className="services-grid">
        {ServiceAPI.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p> {service.Details} </p>
          </div>
        ))}
      </div>
      <div className='service-footer'>
        <p>Excited to take on new projects and collaborates,<br />
        lets chat about your ideas.  <span className='service-span'>Reach Out</span> </p>
      </div>
    </div>
  );
};

export default Services;
