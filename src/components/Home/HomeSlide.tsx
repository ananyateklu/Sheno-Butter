import React, { useState, useEffect } from "react";
import "./HomeSlide.css";

import image1 from "../../assets/fenugreek.png";
import image2 from "../../assets/cumin.png";
import image3 from "../../assets/cardamom.png";
import image4 from "../../assets/turmeric.jpg";
import image5 from "../../assets/lippia.jpg";

const cards = [
    {
        header: "አብሽ (Fenugreek)",
        image: image1,
        text: `Fenugreek gives a slightly bitter and sweet taste`
    },
    {
        header: "ጥቁር አዝሙድ (Black Cumin) ",
        image: image2,
        text: `These seeds have a pungent, bitter flavor and aroma, with hints of onion, black pepper, and oregano`
    },
    {
        header: "ኮረሪማ (cardamom)",
        image: image3,
        text: `Known as the "Queen of Spices", cardamom has a sweet, floral flavor`
    },
    {
        header: "እርድ (Turmeric)",
        image: image4,
        text: `This spice gives the butter a bright yellow color and a warm, earthy flavor`
    },
    {
        header: "ኮሰረት (Lippia)",
        image: image5,
        text: `A native African plant, Koseret's flavor is somewhat similar to oregano and it adds a unique flavor to the butter`
    },
];

const HomeSlide:React.FC = () => {
    const [active, setActive] = useState(0); // set initial active card to the first one
    const [hover, setHover] = useState(-1);

    useEffect(() => {
        const timer = setInterval(() => {
            setActive((active + 1) % cards.length);
        }, 5000);  // Change active card every 5 seconds

        return () => {
            clearInterval(timer);  // Clear the timer when the component is unmounted
        }
    }, [active]);  // Empty dependency array means this effect runs once on mount and clean up on unmount

    return (
        <section>
            {cards.map((card, index) => (
                <article
                    key={card.image}
                    className={
                        (active === index && hover === -1) || hover === index // card should expand if it's the active card and no other card is being hovered, or if it's the hovered card
                        ? "active"
                        : ""
                    }
                    onClick={() => setActive(index)} 
                    onMouseEnter={() => setHover(index)} 
                    onMouseLeave={() => setHover(-1)} 
                >
                    <img src={card.image} alt=""/>
                    <div className = "content">
                        <div>
                            <h2>{card.header}</h2>
                            <p>{card.text}</p>
                        </div>
                    </div>
                </article>
            ))}
        </section>
    );
};

export default HomeSlide;
