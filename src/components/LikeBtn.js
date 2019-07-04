import React, { Component } from 'react'
import PropTypes from 'prop-types'

// TODO: passer le dislike et like depuis reducer

class LikeBtn extends Component {
    
    render() {
        const { isDown, value, onClick } = this.props
        
        return(
            <a className="btn btn-default" title="+1" onClick={onClick}>
                {value}<i className={`glyphicon glyphicon-thumbs-${isDown ? 'down' : 'up'}`}></i>
            </a>
        )
    }
}

LikeBtn.propTypes = {
    isDown: PropTypes.bool
}



export default LikeBtn