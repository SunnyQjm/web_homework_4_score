import AllReducer from './all'
import FinishedReducer from './finished'
import UnFinishedReducer from './unfinished';
import HeaderReducer from './header'
import FooterReducer from './footer'
import {
    combineReducers
} from 'redux'

export default combineReducers({
    AllReducer,
    FinishedReducer,
    UnFinishedReducer,
    HeaderReducer,
    FooterReducer,
})