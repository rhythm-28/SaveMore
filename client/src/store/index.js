import { createStore, applyMiddleware } from 'redux';
import Reducers from '../reducer';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
const store = createStore(Reducers, applyMiddleware(logger, reduxThunk));
export default store;
