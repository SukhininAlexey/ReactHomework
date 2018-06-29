import './UsersCol.css';

import React, { Component } from 'react';

import PageSwitcher from 'components/HW4Site/PageSwitcher';
import UsersContainer from 'containers/UsersContainer';

export default class UsersCol extends Component{
	render() {
        return (
            <div className="col-sm-8 blog-main">
                <UsersContainer />
                <PageSwitcher />
            </div> 
        );
	}
}
