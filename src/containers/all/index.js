import {
    connect
} from 'react-redux'

import {
    AllComponent
} from '../../components'
import {
    ACTION_TYPE_ADD,
    ACTION_TYPE_SELECT_CHANGE,
    ACTION_TYPE_ON_SELECT_CHANGE
} from "../../ActionType";

export default connect(
    (state) => {
        return {
            ...state.AllReducer
        }
    },
    (dispatch) => {
        return {
            addData: (info) => {
                dispatch({
                    type: ACTION_TYPE_ADD,
                    data: info
                });
            },
            onSelect: (selected, item) => {
                dispatch({
                    type: ACTION_TYPE_SELECT_CHANGE,
                    data: item,
                    selected: selected
                });
            },
            onSelectChange: (selectedRowKeys, selectedRows) => {
                dispatch({
                    type: ACTION_TYPE_ON_SELECT_CHANGE,
                    selectedRowKeys: selectedRowKeys,
                    selectedRows: selectedRows
                })
            }
        }
    },
)(AllComponent)