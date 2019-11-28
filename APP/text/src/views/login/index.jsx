import React, { Component } from 'react'
import { Input, Button, message } from 'antd';
import Axios from 'axios';
export default class Login extends Component {
    state = {
        username: "",
        password: ""
    }
    render() {
        let { username, password } = this.state
        return (
            <div>
                <p>用户名： <Input onChange={this.change.bind(this)} value={username} name="username"></Input></p>
                <p>密  码： <Input type="password" name="password" value={password} onChange={this.change.bind(this)}></Input></p>
                <p><Button onClick={this.login.bind(this)}>登录</Button></p>
            </div>
        )
    }
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })


    }
    login() {
        let { username, password } = this.state
        Axios.post("/api/login", { username, password }).then(res => {
            if (res.data.code === 1) {
                message.success("登陆成功")
                localStorage.setItem("list", JSON.stringify({ token: res.data.token, rank: res.data.rank, username: this.state.username }))
                this.props.history.push("/home")
            } else {
                message.error(res.data.msg)
            }
        })
    }
}
