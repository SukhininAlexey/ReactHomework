import './BlogHeader.css';

import React, { Component } from 'react';

export default class BlogHeader extends Component{
    render(){
        const { content } = this.props;
        return(
            <div className="blog-header">
                <h1 className="blog-title">{content.title}</h1>
                <p className="lead blog-description">{content.description}</p>
            </div>
        );
    }
}