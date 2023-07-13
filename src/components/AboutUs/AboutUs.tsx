import React from "react";
import "./AboutUs.css";
import sideimg from '../../assets/ShenoButter-side.png'

const AboutUs: React.FC = () => {
    return (
        <div className="aboutus-container">
            <div className="side-bar">
                <div className="Home-Navbar">
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
                </div>
                <div className="sidebar-img">
                    <img src={sideimg} className="bar-img" alt="side-img" />
                </div>
            </div>
            <div className="aboutus-main">
                AboutUs
            </div>
        </div>
    );
}

export default AboutUs;