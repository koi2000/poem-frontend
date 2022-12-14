import React, { Fragment } from 'react'
import { VirtualTable } from 'ant-virtual-table'

const columns = [
    {
        title: '序号',
        dataIndex: 'id',
        width: 100
    },
    {
        title: '姓名',
        dataIndex: 'name',
        width: 150
    },
    {
        title: '年龄',
        dataIndex: 'age',
        width: 100
    },
    {
        title: '性别',
        dataIndex: 'sex',
        width: 100,
        render: (text) => {
            return text === 'male' ? '男' : '女'
        }
    },
    {
        title: '地址',
        dataIndex: 'address',
        key: 'address'
    }
]

function generateData () {
    const res = []
    const names = ['Tom', 'Marry', 'Jack', 'Lorry', 'Tanken', 'Salla']
    const sexs = ['male', 'female']
    for (let i = 0; i < 10000000; i++) {
        let obj = {
            id: i,
            name: names[i % names.length] + i,
            sex: sexs[i % sexs.length],
            age: 15 + Math.round(10 * Math.random()),
            address: '浙江省杭州市西湖区华星时代广场2号楼'
        }
        res.push(obj)
    }
    return res
}

const dataSource = generateData()

export default class App extends React.Component {
    render () {
        return (
            <Fragment>
                <VirtualTable
                    columns={columns}
                    dataSource={dataSource}
                    rowKey='id'
                    pagination={{ pageSize: 40 }}
                    scroll={{ y: 500 }}
                    bordered
                />
            </Fragment>
        )
    }
}
