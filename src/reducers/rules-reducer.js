import { RULES_LOADED } from '../actions/rules-actions'
import { LIKE_ACTION, DISLIKE_ACTION } from '../actions/likes-actions';

const like = (state, id) =>
    state.map(rule => {
        if (rule.id !== id) {
            return rule
        }
        const newRule = {
            ...rule,
            likes: rule.likes + 1
        }
        return newRule
    })

const disLike = (state, id) =>
    state.map(rule => {
        if (rule.id !== id) {
            return rule
        }
        const newRule = {
            ...rule,
            dislikes: rule.dislikes + 1
        }
        return newRule
    })

const rulesReducer = (state = [], action) => {
    switch (action.type) {
        case RULES_LOADED:
            return action.payload
        case LIKE_ACTION:
            return like(state, action.payload)
        case DISLIKE_ACTION:
            return disLike(state, action.payload)
        default:
            return state
    }
}

export default rulesReducer



