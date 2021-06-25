import {
  Admin_Signup_Failed,
  Admin_Signup_Success,
  Admin_Update_Success,
  Admin_Update_Failed,
  Admin_Update_Unmount,
} from './actionType';
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
export function adminUpdateSuccess(admin) {
  return {
    type: Admin_Update_Success,
    admin,
  };
}
export function adminUpdateFailed(err) {
  return {
    type: Admin_Update_Failed,
    err,
  };
}
export function adminSignup(fd) {
  return (dispatch) => {
    axios
      .post('/admin/register', fd, {
        withCredentials: true,
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => dispatch(adminSignupSuccess(res.data)))
      .catch((error) => {
        dispatch(adminSignupFailed(error.response.data));
      });
  };
}
export function adminUpdate(admin) {
  return (dispatch) => {
    axios
      .post('/api/admin/update', admin, config)
      .then((res) => dispatch(adminUpdateSuccess(res.data)))
      .catch((error) => {
        console.log('Error', error);
        dispatch(adminUpdateFailed(error.response.data));
      });
  };
}
export function adminUnmount() {
  return {
    type: Admin_Update_Unmount,
  };
}
