import './BlogRow.css';

import React, { Component } from 'react';

import BlogColMain from 'components/HW4Site/BlogColMain';
import BlogColSide from 'components/HW4Site/BlogColSide';

export default class BlogRow extends Component{
    render(){
        return(
            <div className="row">
                <BlogColMain />
                <BlogColSide />
            </div>
        );
    }
}
