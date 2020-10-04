import React from 'react'

import { Table, Popconfirm } from 'antd'

function Feedback() {

    const columns = [
        { title: 'Event Name', dataIndex: 'name', key: 'name' },
        { title: 'Event Date', dataIndex: 'date', key: 'date' },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: (text, record) =>
            data.length >= 1 ? (
                // <Popconfirm title="Sure to Unregister?" onConfirm={() => this.handleDelete(record.key)}>
                <a onClick={() => this.handleDelete(record.key)} >Take Survey</a>
                // </Popconfirm>
            ) : null,
        },
    ];

    const data = [
        {
            key: 1,
            name: 'John Brown',
            date: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: 2,
            name: 'Jim Green',
            date: 42,
            address: 'London No. 1 Lake Park',
        },
        {
            key: 3,
            name: 'Not Expandable',
            date: 29,
            address: 'Jiangsu No. 1 Lake Park',
        },
        {
            key: 4,
            name: 'Joe Black',
            date: 32,
            address: 'Sidney No. 1 Lake Park',
        },
    ];

    return (
        <div>
            <Table bordered columns={columns} dataSource={data} />
        </div>
    )
}



export default Feedback
