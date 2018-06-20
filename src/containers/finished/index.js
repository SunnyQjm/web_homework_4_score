import {
    connect
} from 'react-redux'

import {
    FinishedComponent
} from '../../components'

export default connect(
    (state) => {
        return {
            ...state.FinishedReducer
        }
    },
    (dispatch) => {
        return {

        }
    },
) (FinishedComponent)