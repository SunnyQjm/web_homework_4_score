import React from 'react'
import AddComponent from './add'
import styled from 'styled-components';
import {
    Table,
} from 'antd'
import store from '../../store';
import {
    ACTION_TYPE_DELETE
} from '../../ActionType'
const AllBody = styled.div`
    
`;


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
}, {
    title: '总分',
    dataIndex: 'total',
    key: 'total',
    render: (finished, record, index) => {
        return eval(`${record.Chinese}+${record.Math}+${record.English}+${record.Physical}`)
    }
}, {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    render: (operator, record, index) => {
       return <a href="#" onClick={() => {
           store.dispatch({
               type: ACTION_TYPE_DELETE,
               data: record,
           })}
       }>Delete</a>
    }
}
];


class AllComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    // rowSelection objects indicates the need for row selection
    rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            let {onSelectChange} = this.props;
            onSelectChange(selectedRowKeys, selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
            let {onSelect} = this.props;
            onSelect(selected, record);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
            console.log(selected, selectedRows, changeRows);
        },
    };

    render() {
        let {addData, selectedKeys} = this.props;
        this.rowSelection.selectedRowKeys = selectedKeys;
        return (
            <AllBody>
                <AddComponent onAdd={(name, Chinese, Math, English, Physical) => {
                    addData({
                        name, Chinese, Math, English, Physical
                    })
                }}/>
                <Table dataSource={this.props.data} columns={columns} rowSelection={this.rowSelection}
                       />
            </AllBody>
        );
    }
}

export default AllComponent