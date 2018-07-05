import './PostsList.css';

import React, { PureComponent, Fragment } from 'react';

import BlogPost from 'components/HW4Site/BlogPost';

export default class PostsList extends PureComponent{
	render() {
        const { posts, users } = this.props;


        return (
            <Fragment>
                {posts.map(postItem => {
                    const user = users.find( (user) => user._id == postItem.author_id);
                    return <BlogPost key={postItem.id} post={postItem} user={user} />
                })}
            </Fragment> 
		);
	}
}
