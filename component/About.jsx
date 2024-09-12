import React from 'react';
import './About.css'; // Pastikan file CSS ini ada di direktori yang sama
import aboutImage from '../assets/about-image.jpg'; // Path relatif dari `About.jsx`

const About = () => (
  <div className="about-container">
    <img src={aboutImage} alt="About Us" className="about-image" />
    <h1 className="about-title">About Us</h1>
    <p className="about-description">
      Kami adalah sekelompok yang hanya ingin membuat tatanan dunia menjadi lebih baik. semua itu dimulai dari aktivitas sehari hari terlebih dahulu, hadirnya produk kami bertujuan untuk memberikan kenyamanan penuh bagi semua orang.
    </p>
    <button className="about-button">Jika ada kritik dan saran silahkan</button>
  </div>
);

export default About;
