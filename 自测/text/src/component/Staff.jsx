import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { NavLink } from "react-router-dom"

export default class Staff extends Component {
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    className="ser"
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
                        <span><NavLink to="/home/show">预定审批(管理员)</NavLink> </span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="inbox" />
                        <span>会议室预定管理(管理员)</span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="inbox" />
                        <span>会议室管理(管理员)</span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="inbox" />
                        <span>区域建筑物管理(管理员)</span>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Icon type="inbox" />
                        <span>系统设置</span>
                    </Menu.Item>
                </Menu>
            </div>
        )
    }
}
