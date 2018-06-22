import React, { Component } from 'react';
import MenuItem from 'components/HW4Site/MenuItem'

import './Menu.css';

export default class Menu extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            activeItem: null
        }
    }
    
    handleActiveChange = (newActive) => {
        if(this.state.activeItem){
            this.state.activeItem.makeUnactive();
        }
        this.setState({
            activeItem: newActive
        });
    }
    
	render() {
		const { items } = this.props;

		return (
            <div className='container'>
			    <nav className='blog-nav'>
				    {items.map(item => <MenuItem item={item} onActiveChange={this.handleActiveChange} />)}
				</nav>
            </div> 
		);
	}
}
