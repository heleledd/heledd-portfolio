import React from "react";
import StackCard from "./StackCard";
import Carousel from "./Carousel"
import '../styles/Stacking.css'
import profileImage from "../images/heledd-profile-photo.jpg";
import project1 from "../images/bright-star-white.svg";
import project2 from "../images/bright-star-white.svg";
import project3 from "../images/bright-star-white.svg";
import exp1 from "../images/bright-star-white.svg";
import exp2 from "../images/bright-star-white.svg";
import exp3 from "../images/bright-star-white.svg";

export default function Stacking() {

  const projects = [
    { name: "Project One", desc: "Description of project one", img: project1 },
    { name: "Project Two", desc: "Description of project two", img: project2 },
    { name: "Project Three", desc: "Description of project three", img: project3 },
  ];

  const experiences = [
    { name: "Experience One", desc: "Description of experience one", img: exp1 },
    { name: "Experience Two", desc: "Description of experience two", img: exp2 },
    { name: "Experience Three", desc: "Description of experience three", img: exp3 },
  ];

  return (
    <div className="stack-wrapper">

      {/* About Me */}
      <StackCard backgroundColor="#9D96B8" topOffset={5}>
        
        <div className="about-me-container">
          <div className="card-content">
            <h2>About Me</h2>
            <p>I am a final year computer science student with experience in DevOps and a passion for solving problems.</p>
          </div>
          <img src={profileImage} alt="heledd-profile" className="profile-image" />
        </div>
        
      </StackCard>

      {/* Projects */}
      <StackCard backgroundColor="#9A7197" topOffset={10} glide="projects">
        <h2>Projects</h2>
        <Carousel items={projects} />
      </StackCard>

      {/* Experience */}
      <StackCard backgroundColor="#886176" topOffset={15} glide="experience">
        <h2>Experience</h2>
        <Carousel items={experiences} />
      </StackCard>

    </div>
  );
}