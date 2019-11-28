import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Approve from "../views/home/approve"
import Approveage from '../views/home/approveage'
import Approveroom from '../views/home/approveroom'
import Building from '../views/home/building'
import Homes from '../views/home/homes'
import Reserve from '../views/home/reserve'
import Reserveroom from '../views/home/reserveroom'
import Room from '../views/home/room'
import System from '../views/home/system'

export default class Erto extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home/home" component={Homes}></Route>
                <Route path="/home/room" component={Room}></Route>
                <Route path="/home/reserve" component={Reserve}></Route>
                <Route path="/home/approveage" component={Approveage}></Route>
                <Route path="/home/approve" component={Approve}></Route>
                <Route path="/home/reserveroom" component={Reserveroom}></Route>
                <Route path="/home/approveroom" component={Approveroom}></Route>
                <Route path="/home/building" component={Building}></Route>
                <Route path="/home/system" component={System}></Route>
                <Redirect from='/home' to='/home/room'></Redirect>

            </Switch>
        )
    }
}
