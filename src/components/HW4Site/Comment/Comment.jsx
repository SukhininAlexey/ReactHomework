import './Comment.css';

import React, { Component } from 'react';

export default class Comment extends Component{
	render() {
        const { comment, user } = this.props;
        const date = new Date(comment.date).toLocaleString();
        
		return (
            <div className="blog-post">
                
                <p className="blog-post-meta">{date+' by '} 
                    <a href="#">{user.name}</a>
                </p>
                <p>{comment.body}</p>
                
            </div> 
		);
	}
}
