import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authUser from './user/auth';
import authAdmin from './admin/auth';
export default combineReducers({
  authAdmin,
  authUser,
  form: formReducer,
});
