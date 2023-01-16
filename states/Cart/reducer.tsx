import { TypeAction } from './action';
import { CartActionTypes } from './type';

const initialState: any = [];

function cartReducer(cartState = initialState, action: CartActionTypes) {
  switch (action.type) {
    case TypeAction.SET_ALL_CART_USER:
      return action.payload.data;
    case TypeAction.SET_ADD_CART:
      return [...cartState, action.payload.data];
    case TypeAction.SET_DELETE_ALL_CART:
      return initialState;
    default:
      return cartState;
  }
}

export { cartReducer };
