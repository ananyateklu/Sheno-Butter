import React from "react";
import "./Origins.css"
import { Parallax, Background } from "react-parallax";
import image1 from "../../assets/tradi-kibe.png"


  

const Origins:React.FC= () => {

    return(

        <div className="origins-container">
            
            <div className="origins-main" >
            <Parallax bgImage={image1} strength={500}>
            <div className="origin-parallax" >
            <div className="origins-side">
                
           
        


            </div>
            <div className="origins-content">
                    <h1>ORIGINS</h1>
            </div>
            </div>
            </Parallax>
            </div>
            
        </div>

    );
}

export default Origins;