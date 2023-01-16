import { ApiCartUser } from '../../utils/API';
import { AppDispatch } from '..';

const TypeAction = {
  SET_ALL_CART_USER: 'SET_ALL_CART_USER',
  SET_DELETE_ALL_CART: 'SET_DELETE_ALL_CART',
  SET_ADD_CART: 'SET_ADD_CART',
};

function setAddCart(data: any) {
  return {
    type: TypeAction.SET_ADD_CART,
    payload: {
      data,
    },
  };
}

function setDeleteAllCart() {
  return {
    type: TypeAction.SET_DELETE_ALL_CART,
  };
}

function setAllCartUser(data: any) {
  return {
    type: TypeAction.SET_ALL_CART_USER,
    payload: {
      data,
    },
  };
}

function asyncGetAllCartUser(id: number) {
  return async (AppDispatch: any) => {
    try {
      const response = await ApiCartUser.getAllCart(id);
      console.log('inicart', response);
      AppDispatch(setAllCartUser(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  TypeAction,
  setAllCartUser,
  asyncGetAllCartUser,
  setDeleteAllCart,
  setAddCart,
};
