import {SUCCESS_AUTH, ERROR_MSG} from './actions-type'
import {reqRegister, reqLogin} from '../api/index'

const success_auth = (user) => ({type: SUCCESS_AUTH, data: user})
const error_msg = (msg) => ({type: ERROR_MSG, data: msg})

export const register = (user) => {
    return async dispatch => {
        const response = await reqRegister(user)
        const result = response.data
        if (result.code === 0) {
            dispatch(success_auth(result.data))
        } else {
            dispatch(error_msg(response.data.msg))
        }
    }
}

export const login = (user) => {
    return async dispatch => {
        const response = await reqLogin(user)
        const result = response.data
        if (result.code === 0) {
            dispatch(success_auth(result.data))
        } else {
            dispatch(error_msg(response.data.msg))
        }
    }
}
