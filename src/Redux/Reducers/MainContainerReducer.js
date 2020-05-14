import { CREATE_TASK, TERMINATE_TASK } from '../Constants'

const initialState = {
    create: false
}

const reducer = (state=initialState, action) => {

    switch (action.type) {

        case CREATE_TASK :
            return {
                ...state,
                create: true
            }
        case TERMINATE_TASK :
            return {
                ...state,
                create:false
            }
        default:
            return state;
    }
}

export default reducer;