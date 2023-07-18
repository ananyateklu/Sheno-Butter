import React from "react";
import logo from '../assets/shenologot.png';
import './Footer.css';

const Footer: React.FC = () => {
    return (

        <div className="footer">
            <div>
                <a href="/" className="App-logo-link">
                    <img src={logo} className="App-logo" alt="logo" />
                </a>
            </div>
            <div className="footer-links">
                <a href="/" className="Home-link-footer">
                    HOME
                </a>
                <a href="/origins" className="Origins-link-footer">
                    ORIGINS
                </a>
                <a href="/aboutUs" className="About-link-footer">
                    ABOUT US
                </a>
                <a href="/contactUs" className="Contact-link-footer">
                    CONTACT US
                </a>
            </div>
            <div className="footer-social">
                <p className="footer-add">691 Dale Street N</p>
                <p className="footer-add2">Saint Paul, MN 55103</p>
                <br />
                <p className="footer-email">Shenobutter@gmail.com</p>
                <p className="footer-phone">952-236-9641</p>
            </div>
            <div className="footer-maintext">
                <p>Disclaimer: All product images and descriptions on this site are provided
                    'as is', without warranties of any kind, either express or implied. Prices
                    and availability are subject to change without notice. Sheno Butter
                    reserves the right to correct any errors or omissions at any time. Use of this
                    website constitutes acceptance of these conditions. Please contact us
                    with any questions or concerns.</p>
            </div>
            <div className="footer-text">
                <p>© 2023 Sheno Butter</p>
            </div>
        </div>

    );
}

export default Footer;