import {
    connect
} from 'react-redux'

import {
    UnfinishedComponent
} from '../../components'

export default connect(
    (state) => {
        return {
            ...state.UnFinishedReducer
        }
    },
    (dispatch) => {
        return {

        }
    },
) (UnfinishedComponent)