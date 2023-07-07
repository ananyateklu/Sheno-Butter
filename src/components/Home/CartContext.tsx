import React from 'react';

export interface CartItem {
  productName: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
}

const CartContext = React.createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {}
});

export default CartContext;
