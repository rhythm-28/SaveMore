import { createStore, applyMiddleware } from 'redux';
import Reducers from '../reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const store = createStore(Reducers, applyMiddleware(logger, thunk));
export default store;
