/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import { Route, Link } from 'react-router';

export default class Header extends React.Component<any, any> {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img src="images/logo.png" />
                    </Link>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="movies">Movies</Link></li>
                        <li><Link to="about">About</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
 