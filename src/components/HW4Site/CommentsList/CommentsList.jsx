import './CommentsList.css';

import React, { PureComponent, Fragment } from 'react';

import Comment from 'components/HW4Site/Comment';
import BlogPost from 'components/HW4Site/BlogPost';

export default class CommentsList extends PureComponent{
	render() {
        const { users, comments } = this.props;

        return (
            <Fragment>
                {comments.map(commentItem => {
                    const user = users.find( (user) => user._id == commentItem.author_id);
                    return <Comment key={commentItem._id} comment={commentItem} user={user} />
                })}
            </Fragment> 
		);
	}
}
