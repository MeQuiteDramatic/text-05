import React, { Component } from 'react'
import { Table, Divider, Tag } from 'antd';
import Axios from 'axios';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
       
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a>Invite {record.name}</a>
                <Divider type="vertical" />
                <a>Delete</a>
            </span>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export default class List extends Component {
    state = {
        data:[]
    }
    render() {
        let {data} = this.state
        return (
            <div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
    componentDidMount() {
        let userlist = JSON.parse(localStorage.getItem("userlist"))
        let token = localStorage.getItem('token')
      
        if (userlist[0].rank === "项目经理") {
            Axios.get("/api/list", { params: { token } }).then(res => {
                if(res.data.code===1){
                    console.log(res.data.data)
                    this.setState({
                        data:res.data.data
                    })
                }else{
                    alert(res.data.msg)
                }
            })
        }
    }
}
