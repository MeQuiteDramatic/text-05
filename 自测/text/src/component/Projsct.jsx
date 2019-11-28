import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom"

export default class Projsct extends Component {
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                >
                    <Menu.Item key="2">
                        <Icon type="pie-chart" />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Icon type="desktop" />
                        <span> <NavLink to="/home/list">预定会议室</NavLink></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="inbox" />
                        <span><NavLink to="/home/show">我的预定</NavLink></span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span>预定审批(项目经理))</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="inbox" />
                        <span>系统设置</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
