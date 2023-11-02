import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
// import localStorage, { loadState } from '../../middleware/local-storage';

import reducer from '../reducers/index';

// const initialState = loadState();
const storeVar = createStore(
    reducer,
    // initialState,
    applyMiddleware(
        promise,
        thunk,
        // localStorage(),
        logger
    )
);

const store = storeVar;

export default store;