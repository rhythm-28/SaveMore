import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authUser from './auth';
export default combineReducers({
  authUser,
  form: formReducer,
});
