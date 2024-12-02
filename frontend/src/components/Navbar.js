import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ width: '100%', display: 'block' }}>
      <ul style={{ 
        width: '100%', 
        padding: 0, 
        margin: 0, 
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        <li ><Link to="/" style={{
              display: 'block',
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'}}>Home</Link></li>
        <li ><Link to="/albums" style={{
              display: 'block',
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'}}>Albums</Link></li>
        <li ><Link to="/subscription" style={{
              display: 'block',
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'}}>Subscription</Link></li>
        <li ><Link to="/login" style={{
              display: 'block',
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'}}>Login</Link></li>
        <li ><Link to="/signup" style={{
              display: 'block',
              padding: '10px 20px',
              fontSize: '18px',
              backgroundColor: '#f0f0f0',
              border: '1px solid #ddd',
              borderRadius: '4px',
              textDecoration: 'none',
              color: '#333',
              textAlign: 'center'}}>Sign Up</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
