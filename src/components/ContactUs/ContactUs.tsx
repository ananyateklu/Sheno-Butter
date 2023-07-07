import React from "react";
import "./ContactUs.css"

const ContactUs: React.FC = () => {
    return (

        <div className="card">
            <div className="card-main">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="card-inner">
                    <div className="card-main">
                        <div className="contactus-tag">
                            We'd Love to Hear From You
                        </div>
                        <form className="form">

                            <div className="flex">

                                <label>
                                    <input placeholder="" type="text" className="input" required />
                                    <span>first name</span>
                                </label>

                                <label>
                                    <input placeholder="" type="text" className="input" required />
                                    <span>last name</span>
                                </label>
                            </div>

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
                    <div className="contact-img">

                    </div>
                </div>
            </div>
        </div>

    );
}

export default ContactUs;