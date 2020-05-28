import React from 'react';
import './UserProfile.css';

import ItemList from './ItemList'

export default function UserProfile(props) {

    return (
        <div>
            <div className="profile-header">
                <h3>Welcome!</h3>
                <button>Sell an item</button>
            </div>
            <div>
                <ItemList />
            </div>
        </div>
    )

}
