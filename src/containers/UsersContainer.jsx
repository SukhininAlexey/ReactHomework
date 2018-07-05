import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadUsers } from 'actions/users';
import UsersList from 'components/HW4Site/UsersList';

class UsersContainer extends PureComponent {
    
    componentDidMount() {
        const { load } = this.props;
        
        load();
    }
    
    render() {
        const { users, loading } = this.props;
        
        return (
            <Fragment>
                {loading ? <div>Loading..</div> : <UsersList users={users} />}
            </Fragment>
        
        );
    }
}

function mapStateToProps(state, props){
    return {
        ...props,
        loading: state.users.loading,
        users: state.users.users,
    }
}

function mapDispatchToProps(dispatch, props){
    return{
        ...props,
        load: () => loadUsers(dispatch),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
