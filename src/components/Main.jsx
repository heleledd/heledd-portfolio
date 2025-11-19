import profileImage from '../images/heledd-profile-photo.jpg';

function Main() {

  return (
    <>
      <div className="about-me-container">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-content">I am a final year computer science student with experience in DevOps and a passion for solving problems.</p>
        <img src={profileImage} className="profile photo"></img>
      </div>
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <p>A carousel of all my projects - they should pop out so that I can show more of them!!</p>
      </div>
      <div className="experience-container">
        <h2 className="experience-title">Experience</h2>
        <p>Maybe not a carousel - maybe just nice looking cards instead!</p>
      </div>
    </>
  )
}

export default Main
