import React, { useReducer } from 'react';
import CartContext, { CartItem } from './CartContext';

const cartReducer = (state: CartItem[], action: any) => {
    switch (action.type) {
        case 'ADD':
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

        case 'REMOVE':
            const indexToRemove = state.findIndex(
                item => item.productName === action.item.productName
            );

            if (indexToRemove !== -1) {
                const newState = [...state];
                newState[indexToRemove].quantity -= action.item.quantity;

                // If quantity of item is 0 or less, remove the item from the cart
                if (newState[indexToRemove].quantity <= 0) {
                    newState.splice(indexToRemove, 1);
                }

                return newState;
            }

            return state;

        case 'CLEAR':
            return [];

        default:
            return state;
    }
}



const CartProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {

    const [cart, dispatch] = useReducer(cartReducer, []);

    const addToCart = (item: CartItem) => {
        dispatch({ type: 'ADD', item });
    }

    const removeFromCart = (item: CartItem) => {
        dispatch({ type: 'REMOVE', item });
      }

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
