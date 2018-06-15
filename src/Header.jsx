import React, { Component } from 'react';
import Menu from './Menu.jsx';
import LoginButton from './LoginButton.jsx';

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
