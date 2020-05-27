import React from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

export default function Navigation() {

    return (
        <nav>
            <Link to="/">Login</Link>
            <Link to="/signup">Register</Link>
            <Link to="/sellerform">Sell</Link>
        </nav>
    )

}
