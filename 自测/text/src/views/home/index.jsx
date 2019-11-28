import React, { Component } from 'react'
import { Layout, Button } from 'antd';
import Staff from "../../component/Staff"
import Projsct from '../../component/Projsct'
import { Switch, Redirect, Route } from "react-router-dom"
import List from './list'
import Show from './show'

const { Header, Sider, Content } = Layout;
export default class Home extends Component {

    state = {
        user: {},
        flag: false,
        collapsed: false,
    }
    render() {
        let { user, flag } = this.state
        return (
            <Layout className="body">
                <Header className="header">
                    <p><span>{user.username}</span> <span>{user.rank} </span> <Button onClick= {this.replaceRouter.bind(this)}>退出</Button> </p>
                </Header>
                <Layout>
                    <Sider width="270px">

                        {flag ? <Staff></Staff> : <Projsct></Projsct>}
                    </Sider>
                    <Content>
                        <Switch>
                            <Route path="/home/list" component={List}></Route>
                            <Route path="/home/show" component={Show}></Route>
                            <Redirect from="/home" to="/home/list"></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }

    componentDidMount() {
        let userlist = JSON.parse(localStorage.getItem("userlist"))
        this.setState({
            user: { ...userlist[0] }
        })
        if (userlist[0].rank === "管理员") {
            this.setState({
                flag: true
            })
        }
    }
    replaceRouter(){
        this.props.history.replace("/login")
    }

}
