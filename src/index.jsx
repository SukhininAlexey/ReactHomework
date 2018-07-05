import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css';

import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import PageSwitcher from 'components/HW4Site/PageSwitcher';
import MastFooter from 'components/HW4Site/MastFooter';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import {config} from 'components/HW4Site/config'; // Моя конфигурация
import MastHeader from 'components/HW4Site/MastHeader'; // Мастер хедер
import BlogHeader from 'components/HW4Site/BlogHeader'; // Хедер для основного контента
import BlogRow from 'components/HW4Site/BlogRow'; // Обертка для контента
import store from './store';
import UsersContainer from 'containers/UsersContainer';

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <Fragment>
                    <BrowserRouter>
                        <Fragment>
                            <MastHeader menuItems={config.mastHeaderItems} />
                            <div className="container">
                                <BlogHeader content={config.blogHeaderItems} />
                                <BlogRow />
                            </div>
                        </Fragment>
                    </BrowserRouter>
                    <MastFooter />
                </Fragment>
            </Provider>
        );
    }
}

ReactDom.render(<App />, document.getElementById('app'));
