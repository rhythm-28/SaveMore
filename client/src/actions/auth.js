import {
  Login_Start,
  Login_Failed,
  Login_Success,
  Signup_Start,
  Signup_Failed,
  Signup_Success,
} from './actionType';
import axios from 'axios';
const url = 'http://localhost:5000';
export const loginStart = () => {
  return {
    type: Login_Start,
  };
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
export const login = async (user) => {
  const res = await axios.post(`${url}/login`, user);
  console.log('Res', res.data);
};
export const signupStart = () => {
  return {
    type: Signup_Start,
  };
};
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
export const signup = async (user) => {
  const res = await axios.post(`${url}/signup`, user);
  console.log('Res', res.data);
};
