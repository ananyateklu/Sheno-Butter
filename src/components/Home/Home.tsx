import React from "react";
import "./Home.css"


const Home:React.FC= () => {
    return(

        <div className="main-container">
        <div className="side-bar">
         <div className="Home-Navbar">
            
          <a href="/" className="Home-link ">
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
        <div className="sidebar-img">

        </div>
        </div>
      <div className="Home-main">
     
      <div className="main-img-ctn">
        <div className="main-img">
mainimg
        </div>
        <div className="side-img1">
          1
        </div>
        <div className="side-img2">
          2
        </div>
        <div className="side-img3">
          3
        </div>
        <div className="side-img4">
          4
        </div>
      </div>
      <div className="product-holder">
555
      </div>
      </div>
        </div>

    );
}

export default Home;