import {
  LOAD,
  Product_Add_Failed,
  Product_Add_Success,
  Product_Form_Unmount,
  Product_Update_Failed,
  Product_Update_Success,
  Product_Deleted_Success,
  Product_Data_Success,
  Product_Update_Form_Triggered,
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
        dispatch(addProductSuccess());
      })
      .catch((error) => {
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
        dispatch(updateProductSuccess());
      })
      .catch((error) => {
        dispatch(updateProductFailed(error.response.data));
      });
  };
};
export const productDelete = () => {
  return {
    type: Product_Deleted_Success,
  };
};
export const getProductData = (data) => {
  return {
    type: Product_Data_Success,
    data,
  };
};
export const productUpdateFormTriggered = (value, data) => {
  return {
    type: Product_Update_Form_Triggered,
    isTriggered: value,
    data,
  };
};
