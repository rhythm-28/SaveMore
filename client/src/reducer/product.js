import { Product_Add_Failed, Product_Add_Success } from '../actions/actionType';
const initialState = {
  error: null,
};
export default function product(state = initialState, action) {
  switch (action.type) {
    case Product_Add_Failed:
      return {
        error: action.error,
      };
    case Product_Add_Success:
      return {
        error: null,
      };
    default:
      return state;
  }
}
