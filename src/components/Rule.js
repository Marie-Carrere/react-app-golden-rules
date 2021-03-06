import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LikeBtn from './LikeBtn'

class Rule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            folded: false
        }
    }

    toggleFolded = () => {
        this.setState({
            folded: !this.state.folded
        })
    }
    

    render() {
        const { rule, likes, dislikes } = this.props;
        const { folded } = this.state;
        
        return(
            <div className="panel panel-primary">
                <div className="panel-heading" role="presentation" onClick={this.toggleFolded}>
                    {rule.title}
                    <i className={`pull-right glyphicon glyphicon-chevron-${folded ? 'up' : 'down'}`}></i>
                </div>
               {!folded && <div className="panel-body">
                    <p>{rule.description}</p>
                </div>}
                <div className="panel-footer">
                    <div className="btn-toolbar">
                        {rule.tags.map(tag => <span className="badge" key={`tag-${rule.id}-${tag}`}>{tag}</span>)}
    
                        <div className="btn-group btn-group-xs pull-right">
                            <Link to={`/edit/${rule.id}`} className="btn btn-primary" title="Update">
                                <i className="glyphicon glyphicon-pencil"></i>
                            </Link>
                        </div>
                        <div className="btn-group btn-group-xs pull-right">
                            <LikeBtn value={rule.likes} onClick={likes} />
                            <LikeBtn value={rule.dislikes} onClick={dislikes} isDown/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

Rule.propTypes = {
    rule: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        likes: PropTypes.number,
        dislikes: PropTypes.number
    }).isRequired
}

export default Rule