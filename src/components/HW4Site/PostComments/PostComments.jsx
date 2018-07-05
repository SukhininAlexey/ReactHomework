import './PostComments.css';

import React, { Component } from 'react';

import PageSwitcher from 'components/HW4Site/PageSwitcher';
import CommentsContainer from 'containers/CommentsContainer';

export default class PostComments extends Component{
    
	render() {
        const { match } = this.props;
        
        return (
            <div className="col-sm-8 blog-main">
                
                <CommentsContainer postId={match.params.id} />
                <PageSwitcher />
            </div> 
        );
	}
}
