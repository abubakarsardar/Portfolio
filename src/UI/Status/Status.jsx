import React from 'react';
import { CiCalendarDate } from "react-icons/ci";
import { SlScreenDesktop } from "react-icons/sl";
import { CiFaceSmile } from "react-icons/ci";
import { CgAwards } from "react-icons/cg";
import '../Status/Status.css';

export const Status = () => {
  return (
    <div className="stats-container">
      <div className="stats-grid">
        <div className="stat-item">
          <div className='status-icons'><CiCalendarDate /></div> 
          <div className="stat-number">3+</div>
          <div className="stat-title">Years Experience</div>
        </div>
        
        <div className="stat-item">
        <div className='status-icons'><SlScreenDesktop /></div> 
          <div className="stat-number">50+</div>
          <div className="stat-title">Projects Completed</div>
        </div>
        
        <div className="stat-item">
        <div className='status-icons'><CiFaceSmile /></div> 
          <div className="stat-number">100+</div>
          <div className="stat-title">Satisfied Clients</div>
        </div>
        
        <div className="stat-item">
        <div className='status-icons'><CgAwards /></div> 
          <div className="stat-number">18+</div>
          <div className="stat-title">Awards Winner</div>
        </div>
      </div>
    </div>
  );
};