import React from 'react'
import styled from 'styled-components';
import {
    Table,
} from 'antd'


const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
}, {
    title: '语文',
    dataIndex: 'Chinese',
    key: 'Chinese'
}, {
    title: '英语',
    dataIndex: 'English',
    key: 'English'
}, {
    title: '物理',
    dataIndex: 'Physical',
    key: 'Physical'
},{
    title: '总分',
    dataIndex: 'total',
    key: 'total',
    render: (finished, record, index) => {
        return eval(`${record.Chinese}+${record.Math}+${record.English}+${record.Physical}`)
    },
},
];

const UnfinishedBody = styled.div`
`;

class UnfinishedComponent extends React.Component {
    render() {
        let {data, selectedRowNames} = this.props;
        let datas = data.filter(data => {
            return !selectedRowNames.get(data.name)
        });
        return (
            <UnfinishedBody>
                <Table dataSource={datas} columns={columns}/>
            </UnfinishedBody>
        );
    }
}

export default UnfinishedComponent