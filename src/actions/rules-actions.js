import superagent from 'superagent'

export const RULES_LOADED = 'RULES_LOADED'

export const loadRules = (rules) => ({
    type: RULES_LOADED,
    payload: rules
})

export const getRules = () => {
    return dispatch => {
        superagent
            .get('/rest/rules')
            .set('Accept', 'application/json')
            .end((err, res) => {
                dispatch(loadRules(res.body))
            })
    }

}