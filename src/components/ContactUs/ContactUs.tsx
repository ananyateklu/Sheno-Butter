import React from "react";
import "./ContactUs.css"
import sideimg from '../../assets/ShenoButter-side.png'


const ContactUs: React.FC = () => {
    return (
        <div className="contact-container">
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
                    <a href="/aboutUs" className="About-link">
                        <img width="70" height="70" src="https://img.icons8.com/bubbles/100/000000/about.png" alt="about" />
                        <p style={{ width: "50", height: "50" }}>ABOUT US</p>
                    </a>
                </div>
                <div className="sidebar-img">
                    <img src={sideimg} className="bar-img" alt="side-img" />
                </div>
            </div>
            <div className="card">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className="card-main">
                        <div className="contactus-tag">
                            We'd Love to Hear From You
                        </div>
                        <form className="form">
                            <label>
                                <input placeholder="" type="text" className="input-last" required />
                                <span>First & Last name</span>
                            </label>

                            <label>
                                <input placeholder="" type="email" className="input" required />
                                <span>email</span>
                            </label>

                            <label>
                                <input type="tel" placeholder="" className="input" required />
                                <span>contact number</span>
                            </label>
                            <label>
                                <textarea placeholder="" className="input01" required></textarea>
                                <span>message</span>
                            </label>

                            <button className="fancy" >
                                <span className="top-key"></span>
                                <span className="text">submit</span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default ContactUs;