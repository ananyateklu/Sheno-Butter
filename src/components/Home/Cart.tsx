import React, { useContext } from 'react';
import './Cart.css';
import CartContext from './CartContext';

const Cart: React.FC = () => {
  const { cart } = useContext(CartContext);

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.quantity}x </h3>
          <h4>{item.productName}</h4>
          <h4>Price: ${item.price.toFixed(2)}</h4>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <button className="buy-now-btn">Buy Now</button>
    </div>
  );
}

export default Cart;
