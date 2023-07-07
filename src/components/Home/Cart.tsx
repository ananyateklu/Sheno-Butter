import React, { useContext } from 'react';
import './Cart.css';
import CartContext from './CartContext';

const Cart: React.FC = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h4>{item.quantity}X </h4>
          <h4>{item.productName}</h4>
          <h4>Price: ${item.price.toFixed(2)}</h4>
        </div>
      ))}
      <button className="buy-now-btn">Buy Now</button>
    </div>
  );
}

export default Cart;
