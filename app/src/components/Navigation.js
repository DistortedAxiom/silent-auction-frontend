import React from 'react';
import {Link} from 'react-router-dom';
import './Navigation.css'

export default function Navigation() {

    return (
        <nav className="nav-bar">
            <div className="home-link-container">
                <a href='https://auctionable.netlify.app/' className="home-link">Home</a>
            </div>
            <Link to="/" className="nav-item">Login</Link>
            <Link to="/signup" className="nav-item">Register</Link>
            <Link to="/sellerform" className="nav-item">Sell</Link>
        </nav>
    )

}
