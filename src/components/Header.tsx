import React, { useEffect } from 'react';
import logo from '../assets/shenologo.png';
import './Header.css';

const Header:React.FC= () => {

    
 


  useEffect(() => {

    return () => {

    };
  }, []);

  return(
        <header className="header">
        <div>
        <a href="/" className="App-logo-link">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
        </div>
        </header>
    );
}

export default Header;