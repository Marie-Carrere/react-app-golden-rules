import { loadRules, loadRulesTypes } from './rules-actions'
import rules from '../data.json'

describe('rule actions generators', () => {
    it('should generate loadRules action', () => {
        const expected = {
            type: 'loadRulesTypes',
            payload: 'rules'
        }
        expect(loadRules()).toEqual(expected)
    })
})