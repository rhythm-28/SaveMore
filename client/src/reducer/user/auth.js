import {
  Login_Failed,
  Login_Success,
  Signup_Failed,
  Signup_Success,
  Add_User_Data,
  User_Logout,
} from '../../actions/actionType';
const initialState = {
  user: {},
  isLoggedIn: false,
  err: null,
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Login_Success:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case Login_Failed:
      return {
        ...state,
        isLoggedIn: false,
        err: action.error,
      };
    case Signup_Success:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case Signup_Failed:
      return {
        ...state,
        isLoggedIn: false,
        err: action.error,
      };
    case Add_User_Data:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
      };
    case User_Logout:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
      };
    default:
      return state;
  }
}
