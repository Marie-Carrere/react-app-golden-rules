import { connect } from 'react-redux'
import RuleList from './RuleList'
import { loadRules } from '../actions/rules-actions'

const mapStateToProps = state => ({
    rules: state.rules
})

const mapDispatchToProps = dispatch => ({
    loadRules: () => dispatch(loadRules())
})

export default connect(mapStateToProps, mapDispatchToProps)(RuleList)