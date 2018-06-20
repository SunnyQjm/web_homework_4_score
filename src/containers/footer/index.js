import {
    connect
} from 'react-redux'

import {
    FooterComponent
} from '../../components'

export default connect(
    (state) => {
        return {
            ...state.Footer
        }
    },
    (dispatch) => {
        return {

        }
    },
) (FooterComponent)