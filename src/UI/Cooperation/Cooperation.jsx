import React from 'react';
import '../Cooperation/Cooperation.css';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Cooperation = () => {
  return (
    <div className="cooperation-container">

<div className="cooperation-section1"> 
          <h1 className="cooperation-title">Cooperation</h1>
          <p className="cooperation-subtitle"> <span className='title-span'>More than +50</span>  Companies trusted <br /> worldwide_</p>

      <div className="companies-section">
        <img src="/img/amazon.png" className='com-icons' alt="" />
        <img src="/img/Angular.png"className='com-icons' alt="" />
        <img src="/img/visa.png"className='com-icons' alt="" />
        <img src="/img/google.png"className='com-icons' alt="" />
        <img src="/img/Git.png"className='com-icons' alt="" />
        <img src="/img/Nodejs.png" className='com-icon'alt="" />
        <img src="/img/paypal.png"className='com-icon' alt="" />
        <img src="/img/linkedin.png"className='com-icon' alt="" />
        <img src="/img/expressjs.png"className='com-icon' alt="" />
        <img src="/img/Reactjs.png"className='com-icon' alt="" />
      </div>
        <ul className="contact-list">
          <div className='phone'>
          <FaPhoneAlt />
          <li className="contact-item"> +92 308 6917501</li>
          </div>
            <div className='mail'>
            <IoIosMail />
            <li className="contact-item"> abubakarsardar04@gmail.com</li>
            </div>
            
          </ul>
   </div>

<div className="cooperation-section2"> 
<div className="journal-section">
        <h2 className="journal-title">Git Journaling</h2>
        <ul className="journal-list">
          <li className="journal-item"><strong>25 Feb:</strong> Bernlla-streaming-API- <br /> services-for-NodeJs</li>
          <li className="journal-item"><strong>18 Mar:</strong> ChatHub-Chat-application- <br /> Reactjs-mongodb</li>
          <li className="journal-item"><strong>10 May:</strong> Dineeasy-coffee-tea- <br /> reservation-system</li>
          <li className="journal-item"><strong>1 Jun:</strong> Financebuddy-personal- <br /> finance-tracker-JavaScript</li>
          <li className="journal-item"><strong>18 Aug:</strong> Tunestream-music- <br /> streaming-service-API</li>
          <li className="journal-item"><strong>27 Nov:</strong> World-Atlas-reservation <br /> -system-API</li>
          <li className="journal-item"><strong>16 Jan:</strong> Movie-Web-application- <br /> Reactjs-mongodb</li>
          <li className="journal-item"><strong>3 Mar:</strong> Bernlla-streaming-API- <br /> services-for-ReactJs-Node</li>
        </ul>
      </div>
   </div>


      
    </div>
  );
};

