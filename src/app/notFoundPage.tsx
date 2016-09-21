/// <reference path="../reference.d.ts" />
import * as React from 'react';
import { Route, Link } from 'react-router';

export default class NotFoundPage extends React.Component<any, any> {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops!Sorry, there is nothing to see here.</p>
                <p><Link to="/">Back to Home</Link></p>
            </div>
        )
    }
}

