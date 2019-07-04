import React, { Component } from 'react'
import Rule from './RuleContainer'


class RuleList extends Component {
    componentDidMount() {
        this.props.loadRules()
    }

    render() {
        return this.props.rules.map(item => <Rule key={item.id} rule={item} />)
    }
}

export default RuleList;
