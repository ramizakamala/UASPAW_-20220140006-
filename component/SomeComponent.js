// src/components/SomeComponent.js
import React from 'react';
import { useCart } from '../context/CartProvider'; // Pastikan jalur dan casing benar

const SomeComponent = () => {
    const { cart, addItemToCart, removeItemFromCart } = useCart();

    return (
        <div>
            <h1>Cart Items</h1>
            <ul>
                {cart.map(item => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <button onClick={() => addItemToCart({ id: 1, name: 'New Item' })}>Add Item</button>
        </div>
    );
};

export default SomeComponent;
