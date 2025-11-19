import '../styles/Stacking.css'
import profileImage from '../images/heledd-profile-photo.jpg';


function Stacking() {

  return (
    <>
      <div className="stack-wrapper">
        <div className="stack-card first about-me" style={{ backgroundColor: "#9D96B8" }}>
            <div className="card-content">
                <h2>About Me</h2>
                <p>I am a final year computer science student with experience in DevOps and a passion for solving problems</p>
                <p>I have three legs</p>
            </div>
            <img 
                src={profileImage} 
                alt="heledd-profile"
                className="card-image"
            />
        </div>
        <div className="stack-card second" style={{ backgroundColor: "#9A7197" }}>
            <h2>Projects</h2>
            <p>hi</p>
        </div>
        <div className="stack-card third" style={{ backgroundColor: "#886176" }}>
            <h2>Experience</h2>
        </div>
      </div>
    </>
  )
}

export default Stacking