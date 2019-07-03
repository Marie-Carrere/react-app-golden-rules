import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Rule from './Rule'
import rules from '../data'

class RuleList extends Component {
    render() {
        return rules.map(item => <Rule key={item.id} rule={item} />)
    }
}



export default RuleList;
