import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadPosts } from 'actions/posts';
import { loadUsers } from 'actions/users';
import PostsList from 'components/HW4Site/PostsList';

class PostsContainer extends PureComponent {
    
    componentDidMount() {
        const { loadUsers, loadPosts } = this.props;
        
        // Подгружаю всех пользователей и все посты
        loadUsers();
        loadPosts();
    }
    
    render() {
        const { users, posts, loading } = this.props;
        
        return (
            <Fragment>
                {loading ? <div>Loading..</div> : <PostsList posts={posts} users={users} />}
            </Fragment>
        
        );
    }
}


function mapStateToProps(state, props){
    return {
        ...props,
        loading: state.posts.loading || state.users.loading, // если что-то одно не подгрузилось
        users: state.users.users,
        posts: state.posts.posts,
    }
}

function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        loadUsers: () => loadUsers(dispatch),
        loadPosts: () => loadPosts(dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
