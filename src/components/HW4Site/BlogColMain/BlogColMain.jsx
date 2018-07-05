import './BlogColMain.css';

import React, { Component } from 'react';

import PostAdded from 'components/HW4Site/PostAdded';
import BlogPost from 'components/HW4Site/BlogPost';
import PageSwitcher from 'components/HW4Site/PageSwitcher';
import PostsContainer from 'containers/PostsContainer';

export default class BlogColMain extends Component{
	render() {
        return (
            <div className="col-sm-8 blog-main">
                <PostAdded />
                <PostsContainer />
                <PageSwitcher />
            </div> 
        );
	}
}
