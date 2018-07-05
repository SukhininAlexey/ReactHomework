import React, { Component } from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Header from 'components/mySite/Header';

const menuItems = [
    {
        link: '#', title: 'Известия'
    },
    {
        link: '#', title: 'Товарищи'
    },
    {
        link: '#', title: 'Телеграммы'
    }
];

class App extends Component {
    render () {
        return (
            <div className='container'>
                <Header menuItems={menuItems} />
                <div className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In, porro.</div>
            </div>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
