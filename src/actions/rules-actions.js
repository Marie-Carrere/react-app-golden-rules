import rules from '../data.json'

export const loadRulesTypes = 'RULES_LOADED'

export const loadRules = () =>({
        type: loadRulesTypes,
        payload: rules
    })
