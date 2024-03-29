import React, { useContext, useState, useEffect } from "react";
import "./Home.css"
import sideimg from '../../assets/ShenoButter-side.png'
import HomeSlide from "./HomeSlide";
import CartContext from '../Cart/CartContext';
import Cart from '../Cart/Cart';


const Home: React.FC = () => {
  const { addToCart, cart } = useContext(CartContext);
  const [isCartVisible, setIsCartVisible] = useState(false);


  const handleVisibilityChange = (isVisible: boolean) => {
    setIsCartVisible(isVisible);
  }

  const handleAddToCart = (productName: string, price: number) => {
    addToCart({ productName, price, quantity: 1 });
    setIsCartVisible(true); // show cart when item is added
  }

  // This effect closes the cart when the home page is clicked
  useEffect(() => {
    const closeCart = () => {
      setIsCartVisible(false);
    }
    document.querySelector('.Home-main')?.addEventListener('click', closeCart);
    document.querySelector('.Home-Navbar')?.addEventListener('click', closeCart);

    // Clean up the effect by removing the event listener
    return () => {
      document.querySelector('.main-container')?.removeEventListener('click', closeCart);
    }
  }, []);

  // Calculate the number of items in the cart
  const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

  return (
    <div className="main-container">
      <div className="cart-bar">
        <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/external-cart-supermarket-flatart-icons-flat-flatarticons.png" alt="external-cart-supermarket-flatart-icons-flat-flatarticons"
          className="cart-button oneb"
          onClick={(e) => {
            e.stopPropagation(); // Prevent click from bubbling to container
            setIsCartVisible(!isCartVisible);
          }}
        /> <p className="cart-amount oneb" onClick={(e) => {
          e.stopPropagation(); // Prevent click from bubbling to container
          setIsCartVisible(!isCartVisible);
        }}>{itemCount}</p>
        {isCartVisible && <Cart isVisible={isCartVisible} onVisibilityChange={handleVisibilityChange} />}
      </div>

      <div className="side-bar">
        <div className="Home-Navbar">
          <a href="/origins" className="Origins-link">
            <img width="70" height="70" src="https://img.icons8.com/bubbles/100/news.png" alt="news" />
            <p style={{ width: "50", height: "50" }}>ORIGINS</p>
          </a>
          <a href="/contactUs" className="Contact-link">
            <img width="70" height="70" src="https://img.icons8.com/bubbles/100/email--v1.png" alt="email--v1" />
            <p style={{ width: "50", height: "50" }}>CONTACT US</p>
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
      <div className="Home-main">
        <div className="main-img-ctn">
          <div className="main-img">
            <p>AUTHENTIC ETHIOPIAN <br /> BUTTER
              <br />
              ምርጥ የተነጠረ የኢትዮጵያ <br /> ቅቤ </p>
          </div>
          <div className="side-img">
            <HomeSlide />
            <div className="sideimg-low">

            </div>
          </div>
        </div>
        <div className="product-holder">
          <div className="product">
            <div className="product-pic">
            
            </div>
            <div className="product-detail">
            <h3>1Lb Butter (ቅቤ)</h3>
            <h2>$14.95 + shipping</h2>
            <button className="addtocart-btn" onClick={() => handleAddToCart('1Lb Butter (ቅቤ)', 14.95)}>Add to Cart</button>
            </div>
          </div>
          <div className="product">
            <div className="product-pic">
            
            </div>
            <div className="product-detail">
            <h3>2Lb Butter (ቅቤ)</h3>
            <h2>$28.90 + shipping</h2>
            <button className="addtocart-btn" onClick={() => handleAddToCart('2Lb Butter (ቅቤ)', 28.90)}>Add to Cart</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
