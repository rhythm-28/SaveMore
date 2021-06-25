import {
  Admin_Signup_Failed,
  Admin_Signup_Success,
  Admin_Update_Success,
  Admin_Update_Failed,
  Admin_Update_Unmount,
  Success_Message_Flashed,
  Error_Message_Flashed,
} from '../actions/actionType';
const initialState = {
  admin: {},
  isAdmin: false,
  isAdminUpdated: false,
  err: null,
  adminMessage: '',
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
        adminMessage: 'Successfully registered as admin',
      };
    case Admin_Update_Success:
      return {
        ...state,
        admin: action.admin,
        isAdminUpdated: true,
        adminMessage: 'Successfully updated the information',
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
    case Error_Message_Flashed:
      return {
        ...state,
        err: '',
      };
    case Success_Message_Flashed:
      return {
        ...state,
        adminMessage: '',
      };
    default:
      return state;
  }
}
