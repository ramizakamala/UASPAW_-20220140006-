import React from 'react';
import './Home.css';
import logo from '../assets/logo.png'; // Menggunakan path relatif yang benar

const Home = () => (
  <div className="home-container">
    <img src={logo} alt="Welcome" className="home-image" />
    <h1 className="home-title">Welcome to IBOX</h1>
    <p className="home-description">Ayo jelajahi dan pilih smartphone semampu anda!</p>
    <button className="home-button">Mampu Gak</button>
  </div>
);

export default Home;
