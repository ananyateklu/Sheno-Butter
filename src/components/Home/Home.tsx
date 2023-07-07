import React, { useContext, useState, useEffect } from "react";
import "./Home.css"
import sideimg from '../../assets/ShenoButter-side.png'
import HomeSlide from "./HomeSlide";
import CartContext from './CartContext';
import Cart from './Cart';

const Home: React.FC = () => {
  const { addToCart, cart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const handleAddToCart = (productName: string, price: number) => {
    addToCart({ productName, price, quantity: 1 });
    setIsCartVisible(true); // show cart when item is added
  }

  // This effect closes the cart when the home page is clicked
  useEffect(() => {
    const closeCart = () => {
      setIsCartVisible(false);
    }
    document.querySelector('.main-container')?.addEventListener('click', closeCart);

    // Clean up the effect by removing the event listener
    return () => {
      document.querySelector('.main-container')?.removeEventListener('click', closeCart);
    }
  }, []);

  // Calculate the number of items in the cart
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="main-container">
      <button
        className="cart-button" 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click from bubbling to container
          setIsCartVisible(!isCartVisible);
        }}
      >
        Cart ({itemCount})
      </button> 
      {isCartVisible && <Cart />}
      <div className="side-bar">
        <div className="Home-Navbar">
          <a href="/" className="Home-link ">
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
        </div>
        <div className="sidebar-img">
          <img src={sideimg} className="bar-img" alt="side-img" />
        </div>
      </div>
      <div className="Home-main">
        <div className="main-img-ctn">
          <div className="main-img">
            <p>AUTHENTIC ETHIOPIAN <br /> BUTTER
              <br />
              እቤት የተነጠረ የኢትዮጵያ <br /> ቅቤ </p>
          </div>
          <div className="side-img">
            <HomeSlide />
            <div className="sideimg-low">

            </div>
          </div>
        </div>
        <div className="product-holder">
          <div className="product">
            <h3>1Lb Butter</h3>
            <h2>$15.00</h2>
            <button className="addtocart-btn" onClick={() => handleAddToCart('1Lb Butter', 15.00)}>Add to Cart</button>
          </div>
          <div className="product">
            <h3>2Lb Butter</h3>
            <h2>$25.00</h2>
            <button className="addtocart-btn" onClick={() => handleAddToCart('2Lb Butter', 25.00)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
