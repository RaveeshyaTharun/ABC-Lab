import React from 'react';
import { Link } from "react-router-dom";
import './Home.css'; // Import the CSS file for Home component


const Home = () => {
 return (
  <div>
    <nav className="navbar">
    <h className="logo">ABC Lab System</h>
      <ul>
        <li><a href="/Home">Home</a></li>
        <li><a href="/Login">Login</a></li>
        <li><a href="/register">Sign Up</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About us</a></li>
      </ul>
    </nav>
    <div className="home-content">
      <div className="right-bg">
        {/* <img className="position-absolute w-100 h-100 rounded" src="D:\Adv project\lab-frontend\lab-frontend\src\assets\background_image.jpg" style={{ objectFit: 'cover' }} alt="Right background" /> */}
      </div>
      <div className="text-content">
        <h1>Best Healthcare Solution <br/> In Your City </h1>
        <h3>Offers precise and reliable medical laboratory services, ensuring your health needs are met with professionalism and care. <br/>Trust us as your dedicated partner in healthcare for accurate diagnostics and compassionate service.</h3>
        <div className="button-container">
          <Link to="/Login" className="button-primary">Login</Link>
          <Link to="/register" className="button-secondary">Sign Up</Link>
        </div>
      </div>
    </div>
  </div>
 );
}

export default Home;
