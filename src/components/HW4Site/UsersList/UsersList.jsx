import './UsersList.css';

import React, { PureComponent, Fragment } from 'react';

import UserCard from 'components/HW4Site/UserCard';

export default class UsersList extends PureComponent{
	render() {
        const { users } = this.props;

        return (
            <Fragment>
                {users.map(user => <UserCard key={user.id} user={user} /> )}
            </Fragment>
		);
	}
}
