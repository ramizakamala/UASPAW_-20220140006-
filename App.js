// src/App.js
import React from 'react';
import { CartProvider } from '../context/CartProvider'; // Pastikan jalur dan casing benar
import SomeComponent from './component/SomeComponent';

const App = () => {
    return (
        <CartProvider>
            <SomeComponent />
        </CartProvider>
    );
};

export default App;
