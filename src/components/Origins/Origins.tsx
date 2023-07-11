import React from "react";
import "./Origins.css"
import { Parallax} from "react-parallax";
import image1 from "../../assets/kitfoo.jpg"


  

const Origins:React.FC= () => {

    return(

        <div className="origins-container">
            
            <div className="origins-main" >
            <Parallax bgImage={image1} strength={500}>
            <div className="origin-parallax" >
            <div className="origins-side">
                
           
        


            </div>
            <div className="ori-div">
            </div>
            <div className="origins-content">
                    <h1>ORIGINS</h1>
            <div className="ori-cnt-div">

            </div>
            <div className="ori-content">
                <p>
                Welcome to our Origins page! We're excited to share the rich history and culture behind Traditional Ethiopian Butter.
                </p>
                <p>
                For centuries, butter has been an essential part of Ethiopian cuisine and culture. Known as "kibe" in Amharic,
                 Ethiopian butter is made from the milk of grass-fed cows and has a distinctively rich and creamy flavor.
                </p>
                <p>
                The process of making Traditional Ethiopian Butter is a labor of love that has been passed down through generations.
                 First, the milk is heated and allowed to cool, which causes the cream to rise to the surface. The cream is then skimmed
                  off and churned until it becomes butter. Finally, the butter is washed with water to remove any remaining milk solids and 
                  to give it a smooth texture. Ethiopian butter has a unique flavor profile that sets it apart from other types of butter. This is due to the fact that the cows
                 are grass-fed, which gives the butter a slightly tangy and nutty flavor. Additionally, the churning process used to make Ethiopian
                  butter produces a butter that's slightly softer and creamier than other types of butter.
                </p>
                
                <p>
                Butter is a staple ingredient in many Ethiopian dishes, including stews, sauces, and breads. It's also used as a spread on injera, 
                a sourdough flatbread that's a staple of Ethiopian cuisine. In Ethiopia, butter is not just a food, but also an important cultural symbol.
                 It's often used in traditional rituals and ceremonies, such as weddings and christenings. Butter is also used as a sign of respect and hospitality - when guests visit a home, they're often offered a small bowl of butter to eat with their injera.
                </p>

                <p>
                Ethiopian butter has a long history in the country, dating back to ancient times. In fact, there are records of Ethiopian butter being 
                used as far back as the 13th century. Over time, the techniques for making butter have been refined and perfected, resulting in the delicious
                 and high-quality butter that's available today.

                In addition to its cultural significance and delicious taste, Ethiopian butter also has nutritional benefits. It's high in vitamins A and D,
                 as well as Omega-3 fatty acids. Grass-fed butter like Ethiopian butter is also believed to have a better balance of Omega-3 and Omega-6 fatty
                  acids than butter made from grain-fed cows.
                </p>

                <p>
                Some popular Ethiopian dishes that use traditional butter include:
               
                <ul>Tibs: A stir-fry made with meat, vegetables, and spices.</ul>
                <ul>Wat: A stew made with meat, vegetables, and spices.</ul>
                <ul>Doro wat: A chicken stew made with berbere, a spice blend that includes chili peppers, garlic, ginger, and fenugreek.</ul>
                <ul>Injera: A flatbread made from teff flour.</ul>
                <ul>Gomen: A stew made with collard greens, cabbage, and potatoes.</ul>
             
                Traditional Ethiopian butter is also used in a variety of other dishes, such as salads, soups, and pastries.
                </p>
                <p>
                At our ecommerce store, we're proud to offer Traditional Ethiopian Butter that's made using the same time-honored
                 methods and recipes that have been used for generations. Our butter is made with the highest quality milk from grass-fed cows,
                  and it's free from any additives or preservatives.
                </p>
                <p>
                Thank you for choosing our ecommerce store for your Traditional Ethiopian Butter needs. We hope you'll enjoy this delicious and 
                culturally significant ingredient as much as we do!
                </p>

            </div>
            </div>
            </div>
            </Parallax>
            </div>
            
        </div>

    );
}

export default Origins;