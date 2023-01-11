import { TypeAction } from './action';
import { ProjectActionTypes } from './type';

const initialState = [
  {
    id: 1,
    title: '...',
    price: '...',
    category: '...',
    description: '...',
    image: '...',
  },
];

function productReducer(
  productState = initialState,
  action: ProjectActionTypes,
) {
  switch (action.type) {
    case TypeAction.SET_ALL_PRODUCT:
      return action.payload.data;
    default:
      return productState;
  }
}

export { productReducer };
