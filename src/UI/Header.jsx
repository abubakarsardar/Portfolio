import { FaCode } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Resume from "../Resume/Resume.pdf";

export const Header = () =>{
    return (
        <section className="Header">
            <div className="navbar-box">
              <div className="navbar-logo">
                 <NavLink to="/" className="logo-icon"><FaCode className="icon" /> AbuBakar.Dev </NavLink>
                 </div>
              <div className="navbar-icons">
                <ul>
                    <li>  <NavLink to="/about" className="nav-icon" >About</NavLink>  </li>
                    <li> <a href={Resume} download={Resume} className="nav-icon" >Resume</a> </li>
                    <li>  <NavLink to = "/Contact" className="nav-icon" >Contact</NavLink>  </li>
                </ul>
              </div>
              <div className="nav-app-icons">
                <ul>
                    <li>  <NavLink to = "https://www.instagram.com/m.abubakarsardar/" className="icons" target="blank"><IoLogoInstagram /></NavLink>  </li>
                    <li>  <NavLink to = "https://www.linkedin.com/in/muhammadabubakar-reactjs/" target="blank" className="icons" ><FaLinkedin /></NavLink>  </li>
                    <li>  <NavLink to = "https://www.facebook.com/mrehmani11/" className="icons" target="blank"><FaFacebook /></NavLink>  </li>

                </ul>
              </div>
            </div>
        </section>
    )
}