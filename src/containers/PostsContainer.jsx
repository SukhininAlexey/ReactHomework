import React, { PureComponent, Fragment } from 'react';

import PostsList from 'components/HW4Site/PostsList';

export default class PostsContainer extends PureComponent {
    constructor(props){
        super(props);
        
        this.state = {
            loading: true,
            users: [],
            posts: []
        }
    }
    
    
    componentDidMount() {
        this.setState({loading: true});
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => {
            this.setState({
                users
            });
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                this.setState({
                    loading: false,
                    posts
                });

            })
            .catch(() => {
                this.setState({ loading: false });
            });
            
        })
        .catch(() => {
            this.setState({ loading: false });
        });
    }
    
    render() {
        const { users, posts, loading } = this.state;
        
        return (
            <Fragment>
                {loading ? <div>Loading..</div> : <PostsList posts={posts} users={users} />}
            </Fragment>
        
        );
    }
}