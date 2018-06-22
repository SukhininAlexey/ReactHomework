import React, { Component } from 'react';
import Menu from 'components/mySite/Menu';
import LoginButton from 'components/mySite/LoginButton';

import './Header.css';

export default class Header extends Component{
    render(){
        const { menuItems } = this.props;
        return(
            <div className='header'>
                <Menu items={menuItems} />
                <LoginButton />
            </div>
        );
    }
}
