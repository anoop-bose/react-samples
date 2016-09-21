/// <reference path="../reference.d.ts" />

import * as React from 'react';
import { Router, Route, browserHistory, IndexRoute, Redirect, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'

import App from './App';
import Home from './Home';
import NotFoundPage from './NotFoundPage';
import AboutPage from '../components/about/AboutPage';
import MovieList from '../components/movies/MovieList';

// useRouterHistory creates a composable higher-order function
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

var routeMap = (
    < Router history= { appHistory } >
        <Route  path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="about" component={AboutPage}/>
            <Route path="movies" component={MovieList}/>
            <Redirect from="about-us" to="about" />
            <Redirect from="m0vies" to="movies" />
            <Redirect from="about/*" to="about" />
        </Route>
        <Route path="*" component={NotFoundPage}/>

    </Router >
);

export default routeMap;
