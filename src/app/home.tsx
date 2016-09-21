/// <reference path="../reference.d.ts" />
import * as React from 'react';
import { Route, Link } from 'react-router';

export default class HomePage extends React.Component<any, any> {
    render() {
        return (
            <div className="jumbotron">
                <h1>Movie Administration</h1>
                <p>The world's most popular and authoritative source for movies. 
                    Online database of information related to films, television programs and video games</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
}
