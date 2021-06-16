import { Product_Add_Failed, Product_Add_Success,Product_Form_Unmount } from '../actions/actionType';
const initialState = {
  error: null,
  isProductAdded:false
};
export default function product(state = initialState, action) {
  switch (action.type) {
    case Product_Add_Failed:
      return {
        ...state,
        error: action.error,
        isProductAdded:false
      };
    case Product_Add_Success:
      return {
        ...state,
        isProductAdded:true,
      };
    case Product_Form_Unmount:
      return{
        ...state,
        isProductAdded:false,
      }
    default:
      return state;
  }
}
