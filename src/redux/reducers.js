import {combineReducers} from 'redux'
import {SUCCESS_AUTH, ERROR_MSG} from './actions-type'

const initUser = {}

function user(state = initUser, action) {
    switch (action.type) {
        case SUCCESS_AUTH:
            return {...initUser, ...action.data}
        case ERROR_MSG:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}

export default combineReducers({
    user
})