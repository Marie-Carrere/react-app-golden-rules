import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LikeBtn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: this.props.value
        }
    }

    like = () => {
        this.setState({
            value: this.state.value + 1
        })
    }
    
    render() {
        const { isDown } = this.props
        const { value } = this.state
        
        return(
            <a className="btn btn-default" title="+1" onClick={this.like}>
                {value}<i className={`glyphicon glyphicon-thumbs-${isDown ? 'down' : 'up'}`}></i>
            </a>
        )
    }
}

LikeBtn.propTypes = {
    isDown: PropTypes.bool
}



export default LikeBtn