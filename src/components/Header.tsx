import React, { useEffect, useState } from 'react';
import logo from '../assets/shenologo.png';

const Header:React.FC= () => {
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);




    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);

    };
  }, []);



  
  
  
  
  return(
        <header>
        <div>
        <a href="/" className="App-logo-link">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
        </div>
        </header>
    );
}

export default Header;