import './BlogPost.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BlogPost extends Component{
	render() {
        const { post } = this.props;
        let { user } = this.props;
        const date = new Date(post.date).toLocaleString();
        
		return (
            <div className="blog-post">
                <h2 className="blog-post-title"><Link to={`comments/${post._id}`}>{post.title}</Link></h2>
                <p className="blog-post-meta">{date+' by '} 
                    <a href="#">{user.name}</a>
                </p>
                <p>{post.body}</p>
                
            </div> 
		);
	}
}

