import { connect } from 'react-redux'
import Rule from './Rule'
import { likeRule, dislikeRule } from '../actions/likes-actions'

const mapDispatchToProps = (dispatch, ownProps) => ({
    likes: () => dispatch(likeRule(ownProps.rule.id)),
    dislikes: () => dispatch(dislikeRule(ownProps.rule.id))
})

export default connect(null, mapDispatchToProps)(Rule)