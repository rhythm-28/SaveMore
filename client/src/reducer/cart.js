import {
  User_Added_Product,
  User_Subtracted_Product,
  User_Removed_Product,
  Add_User_Products,
  User_Logout,
} from '../actions/actionType';
const initialState = {
  products: [],
  msg: null,
};
export default function CartReducer(state = initialState, action) {
  switch (action.type) {
    case User_Added_Product:
      return {
        ...state,
        products: action.products,
        msg: 'Product Added Successfully',
      };
    case User_Subtracted_Product:
      return {
        ...state,
        products: action.products,
        msg: 'Quantity Decreased Successfully',
      };
    case User_Removed_Product:
      return {
        ...state,
        products: action.products,
        msg: 'Product Removed Successfully',
      };
    case Add_User_Products:
      return {
        ...state,
        products: action.products,
      };
    case User_Logout:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
}
