import { AppDispatch } from '..';
import { ApiCategory } from '../../utils/API/Category';
const TypeAction = {
  SET_ALL_CATEGORY: 'SET_ALL_CATEGORY',
};

function setAllCategory(data: any) {
  return {
    type: TypeAction.SET_ALL_CATEGORY,
    payload: {
      data,
    },
  };
}

function asyncSetAllCategory() {
  return async (AppDispatch: any) => {
    const response = ApiCategory.getAllCategory();
    AppDispatch(setAllCategory(response));
  };
}

export { TypeAction, setAllCategory };
