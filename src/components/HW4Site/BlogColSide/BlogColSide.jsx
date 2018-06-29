import './BlogColSide.css';

import React, { Component } from 'react';

import BlogSideModule from 'components/HW4Site/BlogSideModule';

export default class BlogColSide extends Component{
	render() {
		return (
            <div className="col-sm-3 col-sm-offset-1 blog-sidebar">
                <BlogSideModule />
                <BlogSideModule />
            </div> 
		);
	}
}
