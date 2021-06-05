import {
  Admin_Login_Failed,
  Admin_Login_Success,
  Admin_Signup_Failed,
  Admin_Signup_Success,
} from '../actionType';
import axios from 'axios';
const config = {
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
};
export function adminLoginFailed(err) {
  return {
    type: Admin_Login_Failed,
    err,
  };
}
export function adminLoginSuccess(admin) {
  return {
    type: Admin_Login_Success,
    admin,
  };
}
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
export function adminLogin(admin) {
  return (dispatch) => {
    axios.post('url', admin, config).then((res) => console.log(res.data));
  };
}
export function adminSignup(admin) {
  return (dispatch) => {
    axios.post('url', admin, config).then((res) => console.log(res.data));
  };
}
