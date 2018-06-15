import React, { Component } from 'react';
import './Header.css';
import Menu from './Menu.jsx';
import LoginButton from './LoginButton.jsx';

export default class Header extends Component{
    render(){
        const { menuItems } = this.props; // деструктурируем
        return(
            <div className='header'>
                <Menu items={menuItems} />
                <LoginButton />
            </div>
        );
    }
}