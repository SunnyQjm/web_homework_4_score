import {
    ACTION_TYPE_DELETE,
    ACTION_TYPE_ON_SELECT_CHANGE
} from '../../ActionType'

const initState = {
    selectedRows: []
};

const FinishedReducer = (state = initState, action) => {
    let newState = state;
    switch (action.type){
        case ACTION_TYPE_ON_SELECT_CHANGE:
            newState.selectedRows = action.selectedRows;
            break;
        case ACTION_TYPE_DELETE:
            newState.selectedRows = newState.selectedRows.filter(data => {
                return data.name !== action.data.name;
            });
            break;
    }
    return newState;
};

export default FinishedReducer