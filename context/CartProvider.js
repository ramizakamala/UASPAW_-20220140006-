// src/context/CartProvider.js
import React, { createContext, useState, useContext } from 'react';

// Membuat konteks untuk Cart
const CartContext = createContext();

// Membuat provider untuk Cart
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItemToCart = (item) => {
        setCart([...cart, item]);
    };

    const removeItemFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook untuk mengakses CartContext
export const useCart = () => useContext(CartContext);
