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
                <p>Sheno Butter established in 2021 in Saint Paul, Minnesota.  We are a wholesale company providing Sheno Butter locally and throughout the United States.</p>

                <h2>Our Mission</h2>
                <p>To provide high quality Sheno Butter Ghee using time-honored techniques and the finest imported and local ingredients.</p>

                <h2>Our Team</h2>
                <p>Dedicated members who prepare the butter, market it and deliver it to our customers.</p>

                <h2>Our Milestones</h2>
                <p>You can find Sheno Butter outside Minnesota at</p>
                <ul>
                    <li>Merkato- 2639 Lakevilla Drive Nashville, TN 37217</li>
                    <li>Viva Food Market- 535 N Plano Road Garland, TX 75042</li>
                    <li>Nazret Cultural Foods- 656 Pickett Street Alexandria, VA 22304</li>
                </ul>


            </div>
        </div>
    );
}

export default AboutUs;
