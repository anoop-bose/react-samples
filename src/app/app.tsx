/// <reference path="../reference.d.ts" />
import * as React from 'react';
import { Route, Link } from 'react-router';
import Header from '../components/common/Header';
import HomePage from './Home';

export default class App extends React.Component<any, any> {
    render() {
        return (

            <div>
                <Header/>
                <div className="container">
                   {this.props.children || <HomePage/>}
                </div>
            </div>
        );
    }
}
