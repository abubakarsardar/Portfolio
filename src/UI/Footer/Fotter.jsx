import React from "react";
import "../Footer/Footer.css";
import { FaInstagram, FaLinkedin, FaFacebook, FaCode } from "react-icons/fa";
// import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import Resume from "../../Resume/Resume.pdf";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <FaCode className="footer-icon" />
        <span>John.Dev</span>
      </div>

      <div className="footer-socials">
        {/* <RxCross1 />
        <FaInstagram />
        <FaLinkedin />
        <FaFacebook /> */}
        <li>  <NavLink to = "https://www.instagram.com/m.abubakarsardar/" className="icons" target="blank"><FaInstagram /></NavLink>  </li>
        <li>  <NavLink to = "https://www.linkedin.com/in/muhammadabubakar-reactjs/" target="blank" className="icons" ><FaLinkedin /></NavLink>  </li>
        <li>  <NavLink to = "https://www.facebook.com/mrehmani11/" className="icons" target="blank"><FaFacebook /></NavLink>  </li>
      </div>

      <ul className="footer-links">
        <li><NavLink to = "/About" className="footer-icons">About Me</NavLink> </li>
        <li> <a href={Resume} download={Resume} className="footer-icons" >Resume</a> </li>
        <li><NavLink to = "/Contact" className="footer-icons">Contacts</NavLink> </li>
      </ul>


    </footer>
  );
}
