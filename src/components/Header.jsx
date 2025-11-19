import chefImage from '../images/bright-star.svg';
import '../styles/Header.css';

function Header() {

  return (
    <>
      <div className="header-container">
        <img src={chefImage} alt="Star" className="headerImage" />
        <span>Heledd JUBB</span>
      </div>
    </>
  )
}

export default Header