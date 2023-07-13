import React, { useState } from "react";
import axios from 'axios';
import "./ContactUs.css";
import sideimg from '../../assets/ShenoButter-side.png';

const ContactUs: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Call the sendEmail function
        await sendEmail();

        // Clear the input fields after sending the email
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    const sendEmail = async () => {
        const data = {
            service_id: process.env.REACT_APP_SERVICE_ID,
            template_id: process.env.REACT_APP_TEMPLATE_ID_M,
            user_id: process.env.REACT_APP_USER_ID,
            template_params: {
                'reply_to': email,
                'from_name': name,
                'phoneNumber': phone,
                'message': message,
            },
        };

        try {
            const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.status === 200) {
                alert('Thanks for your message. We will get back to you as soon as possible.');
            } else {
                throw new Error('Failed to send email');
            }
        } catch (error) {
            alert('Oops... ' + JSON.stringify(error));
        }
    };

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
                        <form className="form" onSubmit={handleSubmit}>
                            <label>
                                <input placeholder="" type="text" className="input-last" required 
                                value={name} onChange={(e) => setName(e.target.value)} />
                                <span>First & Last name</span>
                            </label>

                            <label>
                                <input placeholder="" type="email" className="input" required
                                value={email} onChange={(e) => setEmail(e.target.value)} />
                                <span>email</span>
                            </label>

                            <label>
                                <input type="tel" placeholder="" className="input" required
                                value={phone} onChange={(e) => setPhone(e.target.value)} />
                                <span>contact number</span>
                            </label>
                            <label>
                                <textarea placeholder="" className="input01" required
                                value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                                <span>message</span>
                            </label>

                            <button className="fancy" type="submit">
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
