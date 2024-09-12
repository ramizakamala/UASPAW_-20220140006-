import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  // State untuk produk dari API dan produk statis
  const [products, setProducts] = useState([
    { id: 1, name: 'Iphone 13 Promag', price: 20, description: 'Dengan menghadirkan banyak fitur terbaru dan tercanggih di abad ini, Iphone 13 Promag hadir untuk memberikan kenyamanan sehari - hari anda.' },
    { id: 2, name: 'Iphone 14 Plusaja', price: 20, description: 'Tidak kalah banyak dengan masa lalunya, Iphone 14 Plusaja memberikan kenyamanan yang pasti 20 kali lipat lebih baik dari sebelumnya.' },
    { id: 3, name: 'Iphone 15 Promag plus', price: 40, description: 'Ini sebuah kejutan luar biasa dari kami, kami memberikan kenyamanan terbaik dari yang paling baik hanya untuk anda.' },
  ]);

  const [apiProducts, setApiProducts] = useState([]);  // State untuk produk dari API
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  // Mengambil data produk dari API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');
        setApiProducts(response.data); // Menyimpan produk dari API
      } catch (error) {
        console.error("Error fetching products from API:", error);
      }
    };
    fetchProducts();
  }, []);

  // Menggabungkan produk statis dengan produk dari API
  useEffect(() => {
    const allProducts = [...products, ...apiProducts];  // Menggabungkan produk statis dan API
    const sorted = [...allProducts].sort((a, b) =>
      sortOrder === 'asc' ? a.price - b.price : b.price - a.price
    );
    setSortedProducts(sorted);  // Menyimpan produk yang sudah diurutkan
  }, [sortOrder, products, apiProducts]);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}>
        Sort by Price: {sortOrder === 'asc' ? 'Low to High' : 'High to Low'}
      </button>
      <ul>
        {sortedProducts.map(product => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
