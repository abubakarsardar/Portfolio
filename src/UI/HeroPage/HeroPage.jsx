import { FaVuejs } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import "../HeroPage/HeroPage.css"
export const HeroPage = () =>{
    return (
        <div className="main-section">
        <div className="profile-pic-container">
          <img
            src="/img/profile-pic.jpg"
            alt="AbuBakar"
            className="profile-pic"
          />
        </div>

        <div className="intro-text">
          <p className="intro-tag"><span className="Hero-span"> { '<span>' } </span>Hey, I’m AbuBakar <span className="Hero-span"> { '</span>' } </span></p>
          <h1 className="intro-title">
            Senior <span className="highlight">&#123;Full Stack&#125;</span><br />
            Web &amp; App Developer<span className="underscore">_</span>
          </h1>
          <p className="intro-description">
            &lt;p&gt; With expertise in cutting-edge technologies such as <span className="tech">JavaScript, ReactJs, VueJs,</span> and <span className="tech">NodeJs</span>... I deliver web solutions that are both innovative and robust. &lt;/p&gt;
          </p>
          <div className="tech-icons">
          <FaVuejs className="angular" />
          <TbBrandJavascript className="javaScript" />
          <DiJavascript className="djava" />
          <FaReact className="react" />

            <span className="more-text">... and more</span>
          </div>
        </div>
      </div>
    )
}
