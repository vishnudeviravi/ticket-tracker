import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketsContainer from '../TicketsContainer/TicketsContainer';
import Ticket from '../Ticket/Ticket';
import Modal from '../UI/Modal/Modal';
import classes from './MainContainer.module.css';
import { terminateTask } from '../../Redux/Actions';

class MainContainer extends Component {

    terminateCreateTask = () => {
        this.props.terminateTask();
    }

    render() {
            return (
                <>
                <Modal show={this.props.show} closeModal = {this.terminateCreateTask}>
                this is america
                </Modal>
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
                </>
            )
        }
}
const mapStateToProps = state => {
    return {
            show : state.main.create
    }
}

const mapDispatchToProps = dispatch => {
    return {
            terminateTask : () => dispatch(terminateTask())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(MainContainer);