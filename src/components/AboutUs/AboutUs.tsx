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
             
                <h1>About Us</h1>
                <h2>Our Company</h2>
                <p>Put a short company overview here. Let people know what your business does.</p>

                <h2>Our Mission</h2>
                <p>What is your mission? What drives your company forward?</p>

                <h2>Our Team</h2>
                <p>Introduce your team here. Highlight key members and their roles.</p>

                <h2>Our Milestones</h2>
                <p>Key achievements, significant contracts, business milestones etc.</p>
            
            </div>
        </div>
    );
}

export default AboutUs;
