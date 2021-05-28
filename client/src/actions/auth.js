import {
  Login_Start,
  Login_Failed,
  Login_Success,
  Signup_Start,
  Signup_Failed,
  Signup_Success,
} from './actionType';
import axios from 'axios';
const url = 'http://localhost:5000/api/user';
export const loginSuccess = (user) => {
  return {
    type: Login_Success,
    user,
  };
};
export const loginFailed = (err) => {
  return {
    type: Login_Failed,
    err,
  };
};
export function login(user) {
  console.log(user);
  return (dispatch) => {
    axios
      .post(`${url}/login`, user)
      .then((data) => dispatch(loginSuccess(data.data)))
      .catch((err) => {
        dispatch(loginFailed('Invalid username and password'));
      });
  };
}
export const signupSuccess = (user) => {
  return {
    type: Signup_Success,
    user,
  };
};
export const signupFailed = (err) => {
  return {
    type: Signup_Failed,
    err,
  };
};
export function signup(user) {
  console.log(user);
  return (dispatch) => {
    axios
      .post(`${url}/signup`, user)
      .then((data) => dispatch(signupSuccess(data.data)))
      .catch((err) => {
        dispatch(signupFailed('User already Exist'));
      });
  };
}
