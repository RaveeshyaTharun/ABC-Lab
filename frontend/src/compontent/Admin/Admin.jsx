import React from 'react';
import { Link } from "react-router-dom";
import './Admin.css'; // Import the CSS file for Home component


const Admin = () => {
 return (
  <div>
    <nav className="navbar-admin">
    <h className="logo">ABC Lab System</h>
      <ul>
        <li><a href="/Home">Log Out</a></li>
        {/* <li><a href="/Login">Log out</a></li> */}
      </ul>
    </nav>
    <div className="home-content">
      <div className="right-admin-bg">
        {/* <img className="position-absolute w-100 h-100 rounded" src="D:\Adv project\lab-frontend\lab-frontend\src\assets\adminhome.jpg" style={{ objectFit: 'cover' }} alt="Right background" /> */}
      </div>
      <div className="text-content">
        <h1>Best Healthcare Solution </h1>
        <h1>In Your City</h1>
        <div className="button-container">
          <Link to="/Getusers" className="button-primary">Users</Link>
          <Link to="/Getallappointment" className="button-secondary">Appointments </Link>
        </div>
      </div>
    </div>
  </div>
 );
}

export default Admin;
