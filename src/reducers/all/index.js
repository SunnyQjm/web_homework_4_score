import {
    message
} from 'antd'
import {
    ACTION_TYPE_ADD,
    ACTION_TYPE_ON_SELECT_CHANGE,
    ACTION_TYPE_DELETE
} from '../../ActionType'

const initState = {
    data: [{
        name: 'Robbin',
        Chinese: 99,
        Math: 99,
        English: 99,
        Physical: 99,
    }],
    keys: new Map(),
    selectedKeys: [],
};

initState.keys.set('Robbin', initState.data[0]);

const AllReducer = (state = initState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_TYPE_ADD:
            if (newState.keys.get(action.data.name)) {
                message.info('不允许重复添加');
                break;
            }
            newState.keys = newState.keys.set(action.data.name, action.data);
            newState.data = newState.data.concat(action.data);
            break;
        case ACTION_TYPE_ON_SELECT_CHANGE:
            newState.selectedKeys = action.selectedRowKeys;
            break;
        case ACTION_TYPE_DELETE:
            newState.keys.delete(action.data.name);
            newState.data = newState.data.filter(data => {
                return data.name !== action.data.name;
            });
            break;
    }
    return newState;
};

export default AllReducer