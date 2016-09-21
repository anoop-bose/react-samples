/// <reference path="../../reference.d.ts" />
import * as React from 'react';
import {  Router, Route, Link, withRouter } from 'react-router'

const About = React.createClass({

    componentWillMount() {
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },

    routerWillLeave() {
        if (this.state.dirty)
        {
            return 'You have unsaved information, are you sure you want to leave this page?'
        }
    },

    handleChange(event) {
        this.setState({ dirty: true });
        this.setState({
            textValue: event.target.value
        })
    },

    getInitialState() {
        return {
            textValue: 'Hi',
            dirty: false
        }
    },

    handleSubmit(event) {
        event.preventDefault()
        this.setState({ dirty: false });
        this.setState({
            textValue: ''
        }, () => {
            this.props.router.push('/')
        })
    },

    render() {
        return (
            <div className="col-sm-5">
                <h1>About</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group" >
                        <label for="email">Email address: </label>
                        <input type="text" ref="userInput" className="form-control" value={this.state.textValue} onChange={this.handleChange} />
                    </div>
                    <button type="submit" className="btn btn-default">Go</button>

                </form>
            </div>
        )
    }
});

export default withRouter(About);
