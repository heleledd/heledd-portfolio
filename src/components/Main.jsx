import React from "react";
import Carousel from "./Carousel"
import '../styles/Main.css'
import profileImage from "../images/heledd-profile-photo.jpg";
import project1 from "../images/bright-star-white.svg";
import project2 from "../images/bright-star-white.svg";
import project3 from "../images/bright-star-white.svg";
import exp1 from "../images/bright-star-white.svg";
import exp2 from "../images/bright-star-white.svg";
import exp3 from "../images/bright-star-white.svg";
import githubLogo from '../images/github.svg';
import linkedInLogo from '../images/linkedInLogo.png';

export default function Main() {

  const projects = [
    { name: "Project One", desc: "Description of project one", img: project1 },
    { name: "Project Two", desc: "Description of project two", img: project2 },
    { name: "Project Three", desc: "Description of project three", img: project3 },
    { name: "Project Three", desc: "Description of project three", img: project3 },
  ];

  const experiences = [
    { name: "Experience One", desc: "Description of experience one", img: exp1 },
    { name: "Experience Two", desc: "Description of experience two", img: exp2 },
    { name: "Experience Three", desc: "Description of experience three", img: exp3 },
    { name: "Project Three", desc: "Description of project three", img: project3 },
  ];

  return (
    <div className="stack-wrapper">

      {/* About Me */}
      <div className="stack-card" style={{backgroundColor:"#9D96B8"}} >
        
        <div className="about-me-container">
          <div className="card-content">
            <h2>About Me</h2>
            <p>I am a final year computer science student with experience in DevOps and a passion for solving problems.</p>
            <div className="footer-links">
              <a 
                href="https://www.linkedin.com/in/heledd-jubb-035035290/" 
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedInLogo} alt="LinkedIn" className="footer-logo"/>
              </a>
    
              <a 
                href="https://github.com/heleledd" 
                className="footer-icon-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} alt="LinkedIn" className="footer-logo" />
              </a>
          </div>
          </div>
          <img src={profileImage} alt="heledd-profile" className="profile-image" />
        </div>
      </div>

      {/* Projects */}
      <div className="stack-card" style={{backgroundColor:"#9A7197"}}>
        <h2>Projects</h2>
        <Carousel items={projects} />
      </div>

      {/* Experience */}
      <div className="stack-card" style={{backgroundColor:"#886176"}}>
        <h2>Experience</h2>
        <Carousel items={experiences} />
      </div>

    </div>
  );
}