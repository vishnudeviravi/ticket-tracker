import React from 'react';
import TicketsContainer from '../TicketsContainer/TicketsContainer';
import Ticket from '../Ticket/Ticket';

import classes from './MainContainer.module.css';

const MainContainer = () => {

    return (
        <div className={classes.MainContainer}>
            <TicketsContainer label="Backlog">
                <Ticket  title="Product handle api"/>
            </TicketsContainer>
            <TicketsContainer  label="work in progress">
            <Ticket title="Product handle api"/>
            <Ticket  title="Product handle api"/>
            </TicketsContainer>
            <TicketsContainer label="review" >
            <Ticket  title="Product handle api"/>
            <Ticket  title="Product handle api"/><Ticket  title="Product handle api"/>
            </TicketsContainer>
            <TicketsContainer label="done" >
            <Ticket  title="Product handle api"/>
            </TicketsContainer>
        </div>
    )
}

export default MainContainer;