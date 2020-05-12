import React, { Component } from 'react';
import classes from './TicketsContainer.module.css';
import Ticket from '../Ticket/Ticket';
import TicketContainerBanner from  '../TicketContainerBanner/TicketContainerBanner';

class TicketsContainer extends Component {

    render() {

        return (
            <div className={classes.TicketsContainer}>
                <TicketContainerBanner label = {this.props.label}/>
                {this.props.children}
            </div>
        )
    }
}

export default TicketsContainer ;