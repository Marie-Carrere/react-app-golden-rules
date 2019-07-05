import { connect } from 'react-redux'
import RuleForm from './RuleForm'

const mapStateToProps = (state, ownProps) => ({
    rule: state.rules.find(rule => rule.id === parseInt(ownProps.match.params.id)) 
})

export default connect(mapStateToProps, null)(RuleForm)