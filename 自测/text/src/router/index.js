import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from '../views/home'
import Login from "../views/login/index.jsx"
export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Redirect from="/" to="/login"></Redirect>
                </Switch>
            </BrowserRouter>
        )
    }
}
