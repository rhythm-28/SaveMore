import {
  Product_Add_Failed,
  Product_Add_Success,
  Product_Form_Unmount,
  Product_Update_Failed,
  Product_Update_Success,
  Product_Data_Success,
  Product_Deleted_Success,
  Success_Message_Flashed,
  Error_Message_Flashed,
} from '../actions/actionType';
const initialState = {
  err: '',
  isProductAdded: false,
  isProductUpdated: false,
  productMessage: '',
  data: {},
};
export default function product(state = initialState, action) {
  switch (action.type) {
    case Product_Add_Failed:
      return {
        ...state,
        err: action.error,
        isProductAdded: false,
      };
    case Product_Add_Success:
      return {
        ...state,
        isProductAdded: true,
        productMessage: 'Product added successfully',
      };
    case Product_Form_Unmount:
      return {
        ...state,
        err: '',
        isProductAdded: false,
        isProductUpdated: false,
      };
    case Product_Update_Failed:
      return {
        ...state,
        isProductUpdated: false,
        err: action.error,
      };
    case Product_Update_Success:
      return {
        ...state,
        err: '',
        isProductUpdated: true,
        productMessage: 'Product updated successfully',
      };
    case Product_Data_Success:
      return {
        ...state,
        data: action.data,
      };
    case Success_Message_Flashed:
      return {
        ...state,
        productMessage: '',
      };
    case Error_Message_Flashed:
      return {
        ...state,
        err: '',
      };
    case Product_Deleted_Success:
      return {
        ...state,
        productMessage: 'Product deleted successfully',
      };
    default:
      return state;
  }
}
