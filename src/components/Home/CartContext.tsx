import { createContext } from 'react';

export interface CartItem {
  productName: string;
  price: number;
  quantity: number;
}

interface CartContextProps {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
}

const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export default CartContext;
