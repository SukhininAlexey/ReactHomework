import './MenuItem.css';

import React, { Component } from 'react';
import classNames from 'classnames';

export default class MenuItem extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            active: false
        }
    }
    
    makeUnactive = () => {
        this.setState({
            active: false
        });
    }
    
    handleClick = (e) => {
        const { onActiveChange } = this.props;
        if(!this.state.active){
            this.setState({
                active: true
            });
        }else{
            this.setState({
                active: false
            });
        }
        
        if(typeof onActiveChange === 'function'){
            onActiveChange(this);
        }
        
        e.preventDefault();
    }
    
    render() {
		const { item } = this.props;
        const nameOfClass = classNames('blog-nav-item', { active: this.state.active });
        
		return (
            <a className={nameOfClass} onClick={this.handleClick} href={item.link}>{item.title}</a>
		);
	}
}
