import React from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './Redux/Reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose ;

const store = createStore( rootReducer, composeEnhancer() ) ;

const reduxProvider = (props) => {
    return (
        <Provider store = { store } >
            { props.children }
        </Provider>
    )
}

export default reduxProvider ;



