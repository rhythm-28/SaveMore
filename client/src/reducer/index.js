import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authUser from './user/auth';
import authAdmin from './admin/auth';
import product from './product';
import cart from './cart';
export default combineReducers({
  authAdmin,
  authUser,
  product,
  cart,
  form: formReducer,
});
