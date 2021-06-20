import { Admin_Signup_Failed, Admin_Signup_Success } from './actionType';
import axios from 'axios';
const config = {
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
};
export function adminSignupFailed(err) {
  return {
    type: Admin_Signup_Failed,
    err,
  };
}
export function adminSignupSuccess(admin) {
  return {
    type: Admin_Signup_Success,
    admin,
  };
}
export function adminSignup(admin) {
  return (dispatch) => {
    axios
      .post('/admin/register', admin, config)
      .then((res) => dispatch(adminSignupSuccess(res.data)))
      .catch((error) => {
        dispatch(adminSignupFailed(error.response.data));
      });
  };
}
