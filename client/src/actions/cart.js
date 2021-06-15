import axios from 'axios';
import {
  User_Added_Product,
  User_Subtracted_Product,
  User_Removed_Product,
  Add_User_Products,
} from './actionType';
const userAddedProductSuccessfully = (data) => {
  return {
    type: User_Added_Product,
    products: data,
  };
};
const userSubtractedProductSuccessfully = (data) => {
  return {
    type: User_Subtracted_Product,
    products: data,
  };
};
const userRemovedProductSuccessfully = (data) => {
  return {
    type: User_Removed_Product,
    products: data,
  };
};
const addUserProducts = (data) => {
  return {
    type: Add_User_Products,
    products: data,
  };
};
export const userAddedProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`/add/product/${id}`)
      .then((res) => dispatch(userAddedProductSuccessfully(res.data)));
  };
};
export const userSubtractedProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`/decrease/product/${id}`)
      .then((res) => dispatch(userSubtractedProductSuccessfully(res.data)));
  };
};
export const userRemovedProduct = (id) => {
  return (dispatch) => {
    axios
      .get(`/remove/product/${id}`)
      .then((res) => dispatch(userRemovedProductSuccessfully(res.data)));
  };
};
export const getUserProducts = () => {
  return (dispatch) => {
    axios
      .get(`/get/user/products`)
      .then((res) => dispatch(addUserProducts(res.data)));
  };
};
