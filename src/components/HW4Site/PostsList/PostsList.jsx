import './PostsList.css';

import React, { PureComponent, Fragment } from 'react';

import BlogPost from 'components/HW4Site/BlogPost';

export default class PostsList extends PureComponent{
	render() {
        const { posts, users } = this.props;

        return (
            <Fragment>
                {posts.map(postItem => {
                    const user = users.find( (user) => user.id == postItem.userId);
                    const username = user ? user.username : 'Anonimus';
                    return <BlogPost key={postItem.id} post={postItem} username={username} />
                })}
            </Fragment> 
		);
	}
}
