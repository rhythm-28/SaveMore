import {
  Product_Add_Failed,
  Product_Add_Success,
  Product_Form_Unmount,
  Product_Update_Failed,
  Product_Update_Success,
} from '../actions/actionType';
const initialState = {
  error: null,
  isProductAdded: false,
  isProductUpdated: false,
};
export default function product(state = initialState, action) {
  switch (action.type) {
    case Product_Add_Failed:
      return {
        ...state,
        error: action.error,
        isProductAdded: false,
      };
    case Product_Add_Success:
      return {
        ...state,
        isProductAdded: true,
      };
    case Product_Form_Unmount:
      return {
        ...state,
        error: null,
        isProductAdded: false,
        isProductUpdated: false,
      };
    case Product_Update_Failed:
      return {
        ...state,
        isProductUpdated: false,
        error: action.error,
      };
    case Product_Update_Success:
      return {
        ...state,
        error: null,
        isProductUpdated: true,
      };
    default:
      return state;
  }
}
