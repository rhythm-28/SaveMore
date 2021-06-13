import { Product_Add_Failed, Product_Add_Success } from '../actionType';
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
const addProductFailed = () => {
  return {
    type: Product_Add_Failed,
  };
};
export const productAdd = (fd) => {
  return (dispatch) => {
    axios
      .post('/add/product', fd, config)
      .then(() => dispatch(addProductSuccess))
      .catch(() => dispatch(addProductFailed));
  };
  //   const res = await axios.post('/add/product', product, config);
  //   console.log('response', res);
  //   return (dispatch) => {

  //       .then(()=>dispatch)
  //   };
};
