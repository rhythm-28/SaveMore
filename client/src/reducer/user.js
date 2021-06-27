import {
  Login_Failed,
  Login_Success,
  Signup_Failed,
  Signup_Success,
  Add_User_Data,
  User_Logout,
  Admin_Signup_Success,
  Success_Message_Flashed,
  Error_Message_Flashed,
} from '../actions/actionType';
const initialState = {
  user: {},
  isLoggedIn: false,
  err: '',
  isAdmin: false,
  userMessage: '',
};
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case Login_Success:
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: action.user.isAdmin,
        user: action.user,
        userMessage: 'Welcome Back',
      };
    case Login_Failed:
      return {
        ...state,
        isLoggedIn: false,
        err: action.err,
      };
    case Signup_Success:
      return {
        ...state,
        isLoggedIn: true,
        isAdmin: false,
        user: action.user,
        userMessage: 'Welcome to Save More!',
      };
    case Signup_Failed:
      return {
        ...state,
        isLoggedIn: false,
        err: action.err,
      };
    case Add_User_Data:
      return {
        ...state,
        isLoggedIn: true,
        user: action.user,
        isAdmin: action.user.isAdmin,
      };
    case User_Logout:
      return {
        ...state,
        isLoggedIn: false,
        user: {},
        userMessage: 'Thanks For Visiting',
      };
    case Admin_Signup_Success:
      return {
        ...state,
        isAdmin: true,
      };
    case Success_Message_Flashed:
      return {
        ...state,
        userMessage: '',
      };
    case Error_Message_Flashed:
      return {
        ...state,
        err: '',
      };
    default:
      return state;
  }
}
