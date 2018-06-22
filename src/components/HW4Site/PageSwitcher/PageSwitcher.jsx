import React, { Component } from 'react';
import './PageSwitcher.css';

export default class PageSwitcher extends Component{
	render() {
		return (
            <nav>
                <ul className='pager'>
                    <li>
                        <a href="#">Previous</a>
                    </li>
                    <li>
                        <a href="#">Next</a>
                    </li>
                </ul>
            </nav>
		);
	}
}
