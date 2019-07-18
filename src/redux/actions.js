import {SUCCESS_AUTH, ERROR_MSG, RECEIVE_ARTICLES, RECEIVE_ARTICLE} from './actions-type'
import {reqRegister, reqLogin, reqArticle, reqOneArticle} from '../api/index'

const success_auth = (user) => ({type: SUCCESS_AUTH, data: user})
const error_msg = (msg) => ({type: ERROR_MSG, data: msg})
const receive_article = (articles) => ({type: RECEIVE_ARTICLES, data: articles})
const receive_one_article = (article) => ({type: RECEIVE_ARTICLE, data: article})

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

export const getArticle = () => {
    return async dispatch => {
        const response = await reqArticle()
        const result = response.data
        if (result.code === 0) {
            dispatch(receive_article(result.data))
        } else {
            dispatch(error_msg(response.data.msg))
        }
    }
}

export const getOneArticle = (id) => {
    return async dispatch => {
        const response = await reqOneArticle(id)
        const result = response.data
        if (result.code === 0) {
            dispatch(receive_one_article(result.data))
        } else {
            dispatch(error_msg(response.data.msg))
        }
    }
}
