import './UserCard.css';

import React, { Component } from 'react';

export default class UserCard extends Component{
	render() {
        const { user } = this.props;
        
		return (
            <div className="user-card">
                <h2 className="user-card-title">{user.username}</h2>
                <p className="user-card-meta"> Website: {` `}
                    <a href={"https://" + user.website}>{user.website}</a>
                </p>
                
            </div> 
		);
	}
}
