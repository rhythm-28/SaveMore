import {
  Admin_Login_Failed,
  Admin_Login_Success,
  Admin_Signup_Failed,
  Admin_Signup_Success,
} from '../../actions/actionType';
const initialState = {
  admin: {},
  isAdminLoggedIn: false,
  err: null,
};
export default function admin(state = initialState, action) {
  switch (action.type) {
    case Admin_Login_Failed:
      return {
        ...state,
        isAdminLoggedIn: false,
        err: action.err,
      };
    case Admin_Login_Success:
      return {
        ...state,
        isAdminLoggedIn: true,
        admin: action.admin,
      };
    case Admin_Signup_Failed:
      return {
        ...state,
        isAdminLoggedIn: false,
        err: action.err,
      };
    case Admin_Signup_Success:
      return {
        ...state,
        isAdminLoggedIn: true,
        admin: action.admin,
      };
    default:
      return state;
  }
}
