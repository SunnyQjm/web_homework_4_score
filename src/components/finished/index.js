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
    }
},
];

const FinishedBody = styled.div`
`;

class FinishedComponent extends React.Component{
    render(){
        return (
            <FinishedBody>
                <Table dataSource={this.props.selectedRows} columns={columns}/>
            </FinishedBody>
        );
    }
}

export default FinishedComponent;