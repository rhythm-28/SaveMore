import {
  Login_Start,
  Login_Failed,
  Login_Success,
  Signup_Start,
  Signup_Failed,
  Signup_Success,
  Add_User_Data,
  User_Logout,
} from './actionType';
import axios from 'axios';
const config = {
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
};
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
  return (dispatch) => {
    axios
      .post(`/api/user/login`, user, config)
      .then((data) => dispatch(loginSuccess(data.data)))
      .catch((err) => {
        dispatch(
          loginFailed(
            err.response.data === 'Unauthorized'
              ? 'Invalid username or password'
              : err.response.data
          )
        );
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
  return (dispatch) => {
    axios
      .post(`/api/user/signup`, user, config)
      .then((data) => {
        console.log('then', data.data);
        dispatch(signupSuccess(data.data));
      })
      .catch((err) => {
        dispatch(signupFailed(err.response.data));
      });
  };
}
export function addUserData(user) {
  return {
    type: Add_User_Data,
    user,
  };
}
export function userLogout() {
  return {
    type: User_Logout,
  };
}
export function fetchUserData() {
  return (dispatch) => {
    axios
      .get(`/api/currentUser`, config)
      .then((res) => dispatch(addUserData(res.data)))
      .catch((err) => console.log(err));
  };
}
export function logout() {
  return (dispatch) => {
    axios.get(`/api/user/logout`, config).then((res) => dispatch(userLogout()));
  };
}
