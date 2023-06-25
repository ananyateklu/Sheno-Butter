import React from "react";
import "./Home.css"
import sideimg from '../../assets/ShenoButter-side.png'
import mainimg from '../../assets/mainimg.png'
import HomeSlide from "./HomeSlide";

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
      <img src={sideimg} className="bar-img" alt="side-img"/>
        </div>
        </div>
      <div className="Home-main">
      
      <div className="main-img-ctn">
        <div className="main-img">
       <p>AUTHENTIC ETHIOPIAN <br/> BUTTER
       <br/>
       <br/>
       እቤት የተነጠረ የኢትዮጵያ <br/> ቅቤ </p>
        </div>
        <div className="side-img">
          <HomeSlide/>
          <div className="sideimg-low">
            
          </div>
        </div>
      </div>
      <div className="product-holder">
      <div className="product">
        Product one
      </div>
      <div className="product">
        Product two
      </div>
      </div>
      </div>
        </div>

    );
}

export default Home;