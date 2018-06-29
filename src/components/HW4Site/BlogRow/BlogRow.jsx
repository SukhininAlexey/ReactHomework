import './BlogRow.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import BlogColSide from 'components/HW4Site/BlogColSide';
import routes from 'src/routes.js';

export default class BlogRow extends Component{
    render(){
        return(
            <div className="row">
                <Switch>
                    {routes.map((route) => <Route {...route} />)}
                </Switch>
                <BlogColSide />
            </div>
        );
    }
}
