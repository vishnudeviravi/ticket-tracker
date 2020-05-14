import { combineReducers } from 'redux';
import MainContainerReducer from './MainContainerReducer';

const rootReducer = combineReducers({
    main : MainContainerReducer
}) ;

export default rootReducer ;