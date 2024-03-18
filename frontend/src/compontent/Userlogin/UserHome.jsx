import React from 'react';
import './UserHome.css'; // Import the CSS file for Home component
import { Link } from "react-router-dom";

const UserHome = () => {
 return (
  <div>
    <nav className="navbar">
      <h className="logo">ABC Lab System</h>
      <ul>
        <li><a href="/Home">Log out</a></li>
        {/* <li><a href="/appointmentbooking">Get Appoinment</a></li> */}
    
      </ul>
    </nav>
    <div className="home-content">
      <div className="right-bg">
        {/* <img className="position-absolute w-100 h-100 rounded" src="D:\Adv project\lab-frontend\lab-frontend\src\assets\background_image.jpg" style={{ objectFit: 'cover' }} alt="Right background" /> */}
      </div>
      <div className="text-content">
        <h1>Best Healthcare Solution </h1>
        <h1>In Your City</h1>
        <div className="button-container">
          <Link to="/appointmentbooking" className="button-primary">Appoinment</Link>
          <Link to="/pay" className="button-secondary">Payment</Link>
        </div>
      </div>
    </div>
  </div>
 );
}

export default UserHome;
