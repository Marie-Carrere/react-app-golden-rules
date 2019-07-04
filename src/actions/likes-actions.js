export const LIKE_ACTION = 'LIKE_ACTION'
export const DISLIKE_ACTION = 'DISLIKE_ACTION'

export const likeRule = (id) => ({
    type: LIKE_ACTION,
    payload: id
})

export const dislikeRule = (id) => ({
    type: DISLIKE_ACTION,
    payload: id
})
