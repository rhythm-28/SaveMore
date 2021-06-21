import {
  LOAD,
  Product_Add_Failed,
  Product_Add_Success,
  Product_Form_Unmount,
  Product_Update_Failed,
  Product_Update_Success,
} from './actionType';
import axios from 'axios';
const config = {
  withCredentials: true,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};
const addProductSuccess = () => {
  return {
    type: Product_Add_Success,
  };
};
const addProductFailed = (error) => {
  return {
    type: Product_Add_Failed,
    error,
  };
};
export const productFormUnmount = () => {
  return {
    type: Product_Form_Unmount,
  };
};
const updateProductFailed = (error) => {
  return {
    type: Product_Update_Failed,
    error,
  };
};
const updateProductSuccess = () => {
  return {
    type: Product_Update_Success,
  };
};
export const productAdd = (fd) => {
  return (dispatch) => {
    axios
      .post('/add/product', fd, config)
      .then(() => {
        console.log('Product Added');
        dispatch(addProductSuccess());
      })
      .catch((error) => {
        console.log('Product Not Added');
        dispatch(addProductFailed(error.response.data));
      });
  };
  //   const res = await axios.post('/add/product', product, config);
  //   console.log('response', res);
  //   return (dispatch) => {

  //       .then(()=>dispatch)
  //   };
};
export const productUpdate = (fd, id) => {
  return (dispatch) => {
    axios
      .post(`/update/product/${id}`, fd, config)
      .then(() => {
        console.log('Product Added');
        dispatch(updateProductSuccess());
      })
      .catch((error) => {
        console.log('Product Not Added');
        dispatch(updateProductFailed(error.response.data));
      });
  };
};
export const load = (data) => ({ type: LOAD, data });
