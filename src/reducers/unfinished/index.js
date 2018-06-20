import {
    ACTION_TYPE_ADD, ACTION_TYPE_DELETE,
    ACTION_TYPE_ON_SELECT_CHANGE
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
    selectedRowNames: new Map(),
};

initState.keys.set('Robbin', initState.data[0]);

const UnFinishedReducer = (state = initState, action) => {
    let newState = state;
    switch (action.type) {
        case ACTION_TYPE_ADD:
            if (newState.keys.get(action.data.name)) {
                break;
            }
            newState.keys = newState.keys.set(action.data.name, action.data);
            newState.data = newState.data.concat(action.data);
            break;
        case ACTION_TYPE_ON_SELECT_CHANGE:
            newState.selectedRowNames.clear();
            action.selectedRows.forEach(value => {
                newState.selectedRowNames.set(value.name, value);
            });
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

export default UnFinishedReducer