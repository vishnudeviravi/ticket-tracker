import React from 'react';
import classes from './TicketContainerBanner.module.css';



const ticketContainerBanner = (props) => {

    return (
        <div className={classes.Banner}>
        <div className={classes.Text}>
            {props.label}  
        </div>
        <div>
            djj
        </div>

        </div>
    )
}

export default ticketContainerBanner;
