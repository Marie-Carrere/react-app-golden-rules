import { connect } from 'react-redux'
import RuleList from './RuleList'
import { getRules } from '../actions/rules-actions'

const mapStateToProps = state => ({
    rules: state.rules
})

const mapDispatchToProps = dispatch => ({
    loadRules: () => dispatch(getRules())
})

export default connect(mapStateToProps, mapDispatchToProps)(RuleList)