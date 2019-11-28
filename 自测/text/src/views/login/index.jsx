import React, { Component } from 'react'
import { Input, Button } from 'antd';
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
                <div className="ipt_div">
                    <p>
                        <Input className="ipt" name="username" value={username} onChange={this.change.bind(this)}></Input>
                    </p>
                    <p>
                        <Input className="ipt" name="password" value={password} onChange={this.change.bind(this)} tpye="password"></Input>
                    </p>
                    <p>  <Button type="primary" onClick={this.click.bind(this)}>登录</Button></p>
                </div>

            </div>
        )
    }
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    click() {
        let { username, password } = this.state
        Axios.post("/api/login", { username, password }).then(res => {
            if (res.data.code === 1) {
                alert(res.data.msg)
                localStorage.setItem("token", res.data.token)
                localStorage.setItem("userlist", JSON.stringify(res.data.data))
                this.props.history.replace("/home")

            } else {
                alert("登录失败")
            }
        })

    }
}
