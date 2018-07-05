import './UserCard.css';

import React, { Component } from 'react';

export default class UserCard extends Component{
	render() {
        const { user } = this.props;
        
		return (
            <div className="user-card">
                <h2 className="user-card-title">{user.name}</h2>
                <p className="user-card-meta"> Observe posts</p>
                
            </div> 
		);
	}
}
