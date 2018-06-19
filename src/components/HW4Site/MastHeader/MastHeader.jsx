import React, { Component } from 'react';
import Menu from 'components/HW4Site/Menu';

import './MastHeader.css';



export default class MastHeader extends Component{
    render(){
        const { menuItems } = this.props;
        return(
            <div className='blog-masthead'>
                <Menu items={menuItems} />
            </div>
        );
    }
}
