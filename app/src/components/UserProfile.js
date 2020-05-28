import React from 'react';
import './UserProfile.css';

import ItemList from './ItemList'

export default function UserProfile(props) {

    return (
        <div>
            <div className="profile-header">
                <h2>Welcome!</h2>
            </div>
            <div>
                <ItemList />
            </div>
        </div>
    )

}
