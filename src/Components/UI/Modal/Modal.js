import React from 'react';
import classes from './Modal.module.css'; 
import BackDrop from '../BackDrop/BackDrop';

const modal = (props) => {
    
    return (
        <> 
            <BackDrop show = {props.show} clicked = {props.closeModal}/>
            <div className={classes.Modal } 
                style={{ display: props.show? "block": "none" }}>
                {props.children}
            </div>
        </>
    )
}

export default modal;