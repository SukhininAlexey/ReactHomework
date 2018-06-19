import React, { Component } from 'react';
import BlogPost from 'components/HW4Site/BlogPost';
import PageSwitcher from 'components/HW4Site/PageSwitcher';

import './BlogColMain.css';

export default class BlogColMain extends Component{
	render() {
		return (
            <div className='col-sm-8 blog-main'>
                <BlogPost />
                <BlogPost />
                <PageSwitcher />
            </div> 
		);
	}
}
