import React from "react";
import Carousel from "./Carousel.jsx";
import ReadMoreOverlay from "./ReadMoreOverlay.jsx";
import '../styles/Main.css'
import profileImage from "../images/heledd-profile-photo.jpg";

import projects from "../data/projects.js";
import experiences from "../data/experiences.js";
import githubLogo from '../images/github.svg';
import linkedInLogo from '../images/linkedInLogo.png';

export default function Main() {
  const [viewingFullCard, setViewingFullCard] = React.useState(null);

  React.useEffect(() => {
    if (viewingFullCard !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [viewingFullCard]);

  function handleCardClick(item) {
    if (viewingFullCard?.name === item.name) {
      setViewingFullCard(null); // Close the card if it's already open
    } else {
      setViewingFullCard(item); // Open the clicked card
    }
  }

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
        <Carousel items={projects} handleCardClick={handleCardClick} />
      </div>

      {/* Experience */}
      <div className="stack-card" style={{backgroundColor:"#886176"}}>
        <h2>Experience</h2>
        <Carousel items={experiences} handleCardClick={handleCardClick} />
      </div>

      {/* Full Card Overlay */}
      {viewingFullCard !== null &&
        <ReadMoreOverlay item={viewingFullCard} handleCardClick={handleCardClick} />
      }

    </div>
  );
}