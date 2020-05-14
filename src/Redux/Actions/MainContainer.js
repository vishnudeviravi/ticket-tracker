import { CREATE_TASK, TERMINATE_TASK } from '../Constants';

export const createTask = () => {
    return {
        type:CREATE_TASK
    }
}

export const terminateTask = () => {
    return {
        type: TERMINATE_TASK
    }
}