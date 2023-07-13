import React, { useContext, useState, useRef, useEffect } from 'react';
import axios from 'axios';
import './Cart.css';
import CartContext from './CartContext';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "clientId": process.env.REACT_APP_PAYPAL_CLIENT_ID || ""
};

const Cart: React.FC<{ isVisible: boolean, onVisibilityChange: (isVisible: boolean) => void }> = ({ isVisible, onVisibilityChange }) => {
  const { cart, removeFromCart, addToCart, clearCart } = useContext(CartContext);

  const [forceRefresh, setForceRefresh] = useState(Date.now());
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const phoneNumberRef = useRef(phoneNumber);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // new state variable

  useEffect(() => {
    phoneNumberRef.current = phoneNumber;
  }, [phoneNumber]);

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleRemoveFromCart = (productName: string, price: number) => {
    removeFromCart({ productName, price, quantity: 1 });
    setForceRefresh(Date.now());
  }

  const handleAddToCart = (productName: string, price: number) => {
    addToCart({ productName, price, quantity: 1 });
    setForceRefresh(Date.now());
  }

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  }

  const sendEmail = async (name: string, surname: string, email: string, shippingAddress: string, phoneNumber: string, items: any[], totalPrice: number) => {
    const itemsAsString = items.map((item) => `${item.productName} (x${item.quantity}): $${item.price.toFixed(2)}`).join('\n');

    const data = {
      service_id: process.env.REACT_APP_SERVICE_ID,
      template_id: process.env.REACT_APP_TEMPLATE_ID,
      user_id: process.env.REACT_APP_USER_ID,
      template_params: {
        'to_name': name + ' ' + surname,
        'reply_to': email,
        'shipping_address': shippingAddress,
        'phone_number': phoneNumber,
        'items': itemsAsString,
        'total_price': totalPrice.toFixed(2),
      },
    };

    try {
      const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', data, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.status === 200) {
        
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      alert('Oops... ' + JSON.stringify(error));
    }
  }

  const handleOnApprove = async (data: any, actions: any) => {
    const details = await actions.order!.capture();
    const name = details.payer!.name!.given_name;
    const surname = details.payer!.name!.surname;
    const email = details.payer!.email_address;
    const address: any = details.purchase_units![0].shipping!.address;
    const shippingAddress = `${address.address_line_1}, ${address.admin_area_2}, ${address.admin_area_1}, ${address.postal_code}, ${address.country_code}`;
  
    await sendEmail(name, surname, email, shippingAddress, phoneNumberRef.current, cart, totalPrice);
  
    setShowSuccessMessage(true);
    clearCart();
    setTimeout(() => {
      setShowSuccessMessage(false);
      onVisibilityChange(false); // Hide the cart after the success message has been displayed
    }, 10000); // Show the success message for 10 seconds
  }

  return (
    <div className={isVisible ? "cart-container" : "cart-container hidden"}>
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
      <label htmlFor="phoneNumber" className='phonelabel'>Phone Number (required):</label>
      <input id="phoneNumber" className='phonefield' placeholder="Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} required />
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          key={forceRefresh}
          disabled={phoneNumber === "" || totalPrice === 0}
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: totalPrice.toFixed(2)
                }
              }]
            });
          }}
          onApprove={handleOnApprove}
        />
      </PayPalScriptProvider>
      {showSuccessMessage && <div className="success-message">Transaction successful. Thank you for your order!</div>}
    </div>
  );
}

export default Cart;
