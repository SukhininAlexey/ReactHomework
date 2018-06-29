import './PostsList.css';

import React, { PureComponent, Fragment } from 'react';

import BlogPost from 'components/HW4Site/BlogPost';

export default class PostsList extends PureComponent{
	render() {
        const { posts, users } = this.props;
        
		return (
            <Fragment>
                {posts.map(postItem => {
                    let username = 'Anonimus';
                    users.forEach( (user) => {
                        if(user.id == postItem.userId){
                            username = user.username;
                        }
                        return false;
                    });
                    return <BlogPost key={postItem.id} post={postItem} username={username} />
                })}
                
            </Fragment> 
		);
	}
}
