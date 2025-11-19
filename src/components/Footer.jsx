import "../styles/Footer.css";
import githubLogo from '../images/github.svg';
import linkedInLogo from '../images/linkedInLogo.png';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

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

      <p className="footer-bottom">
        © {new Date().getFullYear()} Heledd. All rights reserved.
      </p>
    </footer>
  );
}