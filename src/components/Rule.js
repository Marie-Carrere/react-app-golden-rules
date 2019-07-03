import React, { Component } from 'react';
import LikeBtn from './LikeBtn'
import PropTypes from 'prop-types'

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
        const { rule } = this.props;
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
                            <a className="btn btn-primary" title="Update">
                                <i className="glyphicon glyphicon-pencil"></i>
                            </a>
                        </div>
                        <div className="btn-group btn-group-xs pull-right">
                            <LikeBtn value={rule.likes} />
                            <LikeBtn value={rule.likes} isDown/>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }

}

Rule.propTypes = {
    rule: PropTypes.object,
}

export default Rule