import React, { useReducer } from 'react';
import CartContext, { CartItem } from './CartContext';

const cartReducer = (state: CartItem[], action: any) => {
    console.log(action.type);
    switch (action.type) {
      case 'ADD':
        console.log(action.item);
        const existingItemIndex = state.findIndex(
          item => item.productName === action.item.productName
        );
  
        if (existingItemIndex !== -1) {
          // item already in cart, just increase the quantity
          const newState = [...state];
          newState[existingItemIndex].quantity += action.item.quantity;
          return newState;
        } else {
          // item not in cart, add it
          return [...state, action.item];
        }
        
      case 'CLEAR':
        return [];
      default:
        return state;
    }
  }
  

const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    console.log("Rendering CartProvider");
    const [cart, dispatch] = useReducer(cartReducer, []);
  
    const addToCart = (item: CartItem) => {
      dispatch({ type: 'ADD', item });
    }
  
    const clearCart = () => {
      dispatch({ type: 'CLEAR' });
    }
  
    return (
      <CartContext.Provider value={{ cart, addToCart, clearCart }}>
        {children}
      </CartContext.Provider>
    )
  }

export default CartProvider;
