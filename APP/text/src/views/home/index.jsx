import React, { Component } from 'react'
import { Layout, Button, Menu, message } from 'antd';
import Axios from 'axios';
import Erto from '../../component/erto'
import { NavLink } from 'react-router-dom'
const { Header, Sider, Content } = Layout;
export default class Home extends Component {
    state = {
        username: "",
        rank: "",
        ListData: []
    }
    render() {
        let { username, rank, ListData } = this.state
        return (
            <Layout className="box">
                <Header className="header"> {username} {rank} <Button onClick={this.out.bind(this)}>退出</Button> </Header>
                <Layout>
                    <Sider>
                        <Menu
                            defaultSelectedKeys={['1']}
                            mode="inline"
                            theme="dark"
                        >
                            {ListData.map((item, index) => (
                                <Menu.Item key={index}>
                                    <NavLink to={'/home' + item.routers}>{item.title}</NavLink>
                                </Menu.Item>
                            ))}
                        </Menu>

                    </Sider>
                    <Content>
                        <Erto></Erto>
                    </Content>
                </Layout>
            </Layout>
        )
    }

    componentDidMount() {
        let list = JSON.parse(localStorage.getItem("list"))
        if (list) {
            this.setState({
                username: list.username,
                rank: list.rank
            })
            Axios.get("/api/rights", { headers: { token: list.token } }).then(res => {
                if (res.data.code === 1) {
                    this.setState({
                        ListData: res.data.data
                    })
                } else {
                    message.error(res.data.msg)
                }

            })
        } else {
            this.props.history.push("/login")
        }


    }
    out() {
        localStorage.removeItem("list")
        this.props.history.push("/login")

    }


}
