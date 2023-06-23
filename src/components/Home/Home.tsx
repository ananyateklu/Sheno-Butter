import React from "react";
import "./Home.css"


const Home:React.FC= () => {
    return(

        <div className="main-container">
         <div className="Home-Navbar">
            
          <a href="/" className="Home-link">
            HOME
          </a>
          <a href="/origins" className="Origins-link">
            ORIGINS
          </a>
          
          <a href="/aboutUs" className="About-link">
            ABOUT US
          </a>
          <a href="/contactUs" className="Contact-link">
            CONTACT US
          </a>
        
        </div>
      <div className="Home-main">
      Main Componenets
      </div>
        </div>

    );
}

export default Home;