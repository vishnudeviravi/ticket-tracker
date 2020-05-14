import React, { Component } from 'react';
import classes from './TicketContainerBanner.module.css';
import { connect } from 'react-redux';
import { createTask } from '../../Redux/Actions';


class TicketContainerBanner extends Component {


    render () {

        return (
            <div className={classes.Banner}>
            <div className={classes.Text}>
                {this.props.label}  
            </div>
            <div onClick={this.props.createTask}>
                X
            </div>
    
            </div>
        )

    }

    
}

const mapDispatchToProps = dispatch => {

    return {
        createTask : () => dispatch(createTask())
    }

}

export default connect(null, mapDispatchToProps)(TicketContainerBanner);
