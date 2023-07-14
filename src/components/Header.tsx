import React, { useEffect, useState } from 'react';
import logo from '../assets/shenologot.png';
import './Header.css';
import burger from '../assets/burger.png'

const Header: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  useEffect(() => {

    return () => {

    };
  }, []);

  return (
    <header className="header">
      <div>
        <div className="mobile-nav-bar">
          <img src={burger} alt="burger" className="burger-button" onClick={() => setIsSidebarVisible(!isSidebarVisible)} />
          {isSidebarVisible && <div className="side-bar">
            <div className="Home-Navbar-mobile">
              <a href="/" className="Home-link">
                <img width="70" height="70" src="https://img.icons8.com/bubbles/100/home.png" alt="home" />
                <p style={{ width: "50", height: "50" }}>HOME</p>
              </a>
              <a href="/origins" className="Origins-link">
                <img width="70" height="70" src="https://img.icons8.com/bubbles/100/news.png" alt="news" />
                <p style={{ width: "50", height: "50" }}>ORIGINS</p>
              </a>
              <a href="/contactUs" className="Contact-link">
                <img width="70" height="70" src="https://img.icons8.com/bubbles/100/email--v1.png" alt="email--v1" />
                <p style={{ width: "50", height: "50" }}>CONTACT US</p>
              </a>
              <a href="/aboutUs" className="About-link">
                <img width="70" height="70" src="https://img.icons8.com/bubbles/100/000000/about.png" alt="about" />
                <p style={{ width: "50", height: "50" }}>ABOUT US</p>
              </a>
            </div></div>}
        </div>
        <a href="/" className="App-logo-link">
          <img src={logo} className="App-logo" alt="logo" />
        </a>
      </div>
    </header>
  );
}

export default Header;