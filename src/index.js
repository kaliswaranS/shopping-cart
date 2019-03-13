import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import { Provider } from 'react-redux';

import Store from './store';

import './assets/styles/main.scss';

import MainLayout from './main-layout';

import { ShoppingCartContainer } from './shopping-cart';

const Index = () => (
    <Router>
        <Switch>
            <MainLayout>
                <Route exact path="/" component={ShoppingCartContainer} />
            </MainLayout>
        </Switch>
    </Router>
);

ReactDOM.render(
    <Provider store={Store}>
        <Index />
    </Provider>
    , document.getElementById('app')
);
