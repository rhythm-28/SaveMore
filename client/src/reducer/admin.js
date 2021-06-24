import {
  Admin_Signup_Failed,
  Admin_Signup_Success,
  Admin_Update_Success,
  Admin_Update_Failed,
  Admin_Update_Unmount,
} from '../actions/actionType';
const initialState = {
  admin: {},
  isAdmin: false,
  isAdminUpdated: false,
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
    case Admin_Update_Success:
      return {
        ...state,
        admin: action.admin,
        isAdminUpdated: true,
      };
    case Admin_Update_Failed:
      return {
        ...state,
        err: action.err,
        isAdminUpdated: false,
      };
    case Admin_Update_Unmount:
      return {
        ...state,
        isAdminUpdated: false,
      };
    default:
      return state;
  }
}
