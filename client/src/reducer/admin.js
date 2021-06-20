import {
  Admin_Signup_Failed,
  Admin_Signup_Success,
} from '../actions/actionType';
const initialState = {
  admin: {},
  isAdmin: false,
  err: null,
};
export default function admin(state = initialState, action) {
  switch (action.type) {
    case Admin_Signup_Failed:
      return {
        ...state,
        isAdmin: false,
        err: action.err,
      };
    case Admin_Signup_Success:
      return {
        ...state,
        isAdmin: true,
        admin: action.admin,
      };
    default:
      return state;
  }
}
