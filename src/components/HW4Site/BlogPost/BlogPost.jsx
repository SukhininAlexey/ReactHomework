import './BlogPost.css';

import React, { Component } from 'react';

export default class BlogPost extends Component{
	render() {
        const { post } = this.props;
        let { username } = this.props;
        
		return (
            <div className="blog-post">
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-meta">January 1, 2014 by{` `} 
                    <a href="#">{username}</a>
                </p>
                <p>{post.body}</p>
                
            </div> 
		);
	}
}
