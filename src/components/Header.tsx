import React from "react";


const Header:React.FC= () => {
    return(

        <div>
            <>
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
        </>
        </div>

    );
}

export default Header;