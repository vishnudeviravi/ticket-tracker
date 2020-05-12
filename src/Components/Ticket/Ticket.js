import React, { Component } from 'react';
import classes from './Ticket.module.css';



class Ticket extends Component {

    render() {
        return (
            <div className= {classes.Ticket}>
                <div className={classes.Line}>
                </div>
               <div className={classes.Title}> {this.props.title} </div>
               
            </div>
        )
    }
}

export default Ticket;