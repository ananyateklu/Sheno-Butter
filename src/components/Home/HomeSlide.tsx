import React from "react";
import { useState } from "react";
import "./HomeSlide.css";

import image1 from "../../assets/photo_1.jpg";
import image2 from "../../assets/photo_2.jpg";
import image3 from "../../assets/photo_3.jpg";
import image4 from "../../assets/side-img1.png";
import image5 from "../../assets/side-img2.png";

const cards = [
    {
        header: "Spice 1",
        image: image1,
        text: ` Image description here, `
    },
    {
        header: "Spice 2",
        image: image2,
        text: ` Image description here, `
    },
    {
        header: "Spice 3",
        image: image3,
        text: ` Image description here, `
    },
    {
        header: "Spice 4",
        image: image4,
        text: ` Image description here, `
    },
    {
        header: "Spice 5",
        image: image5,
        text: ` Image description here, `
    },
    
];


const HomeSlide:React.FC= () => {
    const [active, setActive] = useState(0);
    return(

        <section>
            {cards.map((card, index) => (
                <article
                key={card.image}
                className={
                    active === index
                    ? "active"
                    : ""
                }
                onClick={()=> setActive(index)}
                >
                    <img src={card.image} alt=""/>
                    <div className = "content">
                        
                        <div>
                            <h2>{card.header}</h2>
                            <p>{card.text}</p>
                        </div>
                    </div>
                </article>
            )
            )}
        </section>

    );
};

export default HomeSlide;