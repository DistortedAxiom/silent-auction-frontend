import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='ui secondary pointing menu'>
            <Link to="/register" className="item">
                Register
            </Link>
            <Link to="/" className="item">
                Login
            </Link>
            <div className="right menu">
                <Link to="/items/list" className="item">
                    Browse Items
                </Link>
            </div>
        </div>);
}

export default Navigation;