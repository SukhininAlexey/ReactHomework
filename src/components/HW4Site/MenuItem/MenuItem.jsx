import React, { Component } from 'react';
import './MenuItem.css';

export default class MenuItem extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            active: ''
        }
    }
    
    makeUnactive = () => {
        this.setState({
            active: ''
        });
    }
    
    handleClick = (e) => {
        const { onActiveChange } = this.props;
        if(!this.state.active){
            this.setState({
                active: 'active'
            });
        }else{
            this.setState({
                active: ''
            });
        }
        
        if(typeof onActiveChange === 'function'){
            onActiveChange(this);
        }
        
        e.preventDefault();
    }
    
    render() {
		const { item } = this.props;
        const nameOfClass = 'blog-nav-item ' + this.state.active;
        
		return (
            <a className={nameOfClass} onClick={this.handleClick} href={item.link}>{item.title}</a>
		);
	}
}
