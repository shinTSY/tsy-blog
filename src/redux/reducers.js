import {combineReducers} from 'redux'
import {SUCCESS_AUTH, ERROR_MSG, RECEIVE_ARTICLES, RECEIVE_ARTICLE} from './actions-type'

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

const initArticle = {
    articleList: [],
    currentArticle: {}
}
function article(state = initArticle, action) {
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return {...initArticle, articleList: [...action.data]}
        case RECEIVE_ARTICLE:
            return {...initArticle, currentArticle: action.data}
        default:
            return state
    }
}

export default combineReducers({
    user,
    article
})