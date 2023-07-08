import React, { useContext, Key, useState } from 'react';
import './Cart.css';
import CartContext from './CartContext';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Options for PayPalScriptProvider. Replace <your_client_id> with your actual client id.
const initialOptions = {
  "clientId": process.env.REACT_APP_PAYPAL_CLIENT_ID || ""
};

const Cart: React.FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  
  const [forceRefresh, setForceRefresh] = useState<Key>(Date.now()); // Use a state to force refresh

  // Calculate the total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemoveFromCart = (productName: string, price: number) => {
    removeFromCart({ productName, price, quantity: 1 });
    setForceRefresh(Date.now()); // Refresh PayPalButtons whenever the cart is updated
  }

  const handleAddToCart = (productName: string, price: number) => {
    addToCart({ productName, price, quantity: 1 });
    setForceRefresh(Date.now()); // Refresh PayPalButtons whenever the cart is updated
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <h3>{item.quantity}x </h3>
          <h4>{item.productName}</h4>
          <h4>Price: ${item.price.toFixed(2)}</h4>
          <button onClick={() => handleAddToCart(item.productName, item.price)}>+</button>
          <button onClick={() => handleRemoveFromCart(item.productName, item.price)}>-</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          key={forceRefresh} // Add the key prop here
          createOrder={(data, actions) => {
            return actions.order!.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice.toFixed(2), // or replace with a fixed price if necessary
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order!.capture();
            const name = details.payer!.name!.given_name;
            const email = details.payer!.email_address;
            const address: any  = details.purchase_units![0].shipping!.address;
            const shippingAddress = `${address.address_line_1}, ${address.admin_area_2}, ${address.admin_area_1}, ${address.postal_code}, ${address.country_code}`;
            alert("Transaction completed by " + name + "\nEmail: " + email + "\nShipping Address: " + shippingAddress);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Cart;
