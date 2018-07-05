import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadComments } from 'actions/comments';
import { loadUsers } from 'actions/users';

import CommentsList from 'components/HW4Site/CommentsList';

class CommentsContainer extends PureComponent {
    constructor(props){
        super(props); 
        this.state = {
            loading: false,
            singlePost: {},
        }
    }
    
    loadSinglePost() {
        const { postId } = this.props;
        this.setState({loading: true});
        fetch(`http://localhost:8888/posts/${postId}`)
        .then((response) => response.json())
        .then((post) => {
            this.setState({
                loading: false,
                singlePost: post,
            })
        })
        .catch(() => {
            this.setState({loading: false});
        });
    }
    
    componentDidMount() {
        const { loadUsers, loadPosts, loadComments } = this.props;
        this.loadSinglePost();
        // Подгружаю всех пользователей и все комменты
        loadUsers();
        loadComments();
    }
    
    render() {
        const { users, comments, loading } = this.props;
        const loadingPost = this.state.loading;
        return (
            <Fragment>
                <div>Сюда поставим CommentsList {this.props.postId} </div>
                {loading || loadingPost ? <div>Loading..</div> : <CommentsList comments={comments} users={users} post={this.state.singlePost} />}
            </Fragment>
        
        );
    }
}

function mapStateToProps(state, props){
    return {
        ...props,
        loading: state.users.loading || state.comments.loading, // если что-то одно не подгрузилось
        users: state.users.users,
        comments: state.comments.comments,
    }
}

function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        loadUsers: () => loadUsers(dispatch),
        loadComments: () => loadComments(dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
