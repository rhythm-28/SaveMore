import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authUser from './user';
import authAdmin from './admin';
import product from './product';
import cart from './cart';
import account from './formreducer';
export default combineReducers({
  authAdmin,
  authUser,
  product,
  cart,
  account,
  form: formReducer,
});
