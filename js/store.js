import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';


import * as reducers from './reducers/index';
const logger = createLogger();

export default createStore(reducers.hotColdReducer, applyMiddleware(thunk, logger));

