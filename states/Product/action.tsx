import { ApiProduct } from '../../utils/API';
import { AppDispatch } from '..';

const TypeAction = {
  SET_ALL_PRODUCT: 'SET_ALL_PRODUCT',
  SET_CATEGORY_PRODUCT: 'SET_CATEGORY_PRODUCT',
};

function asyncSetCategoryProduct(category: any) {
  return async (AppDispatch: any) => {
    try {
      const response = await ApiProduct.getCategoryProduct(category);
      AppDispatch(setAllProduct(response));
    } catch (error) {
      console.log(error);
    }
  };
}

function setAllProduct(data: any) {
  return {
    type: TypeAction.SET_ALL_PRODUCT,
    payload: {
      data,
    },
  };
}

function asyncSetAllProduct() {
  return async (AppDispatch: any) => {
    try {
      const response = await ApiProduct.getProductData();
      AppDispatch(setAllProduct(response));
    } catch (error) {
      console.log(error);
    }
  };
}

export {
  TypeAction,
  setAllProduct,
  asyncSetAllProduct,
  asyncSetCategoryProduct,
};
