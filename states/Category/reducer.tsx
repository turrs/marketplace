import { TypeAction } from './action';
import { ActionTypes } from './type';
const initialState = {};

function categoryReducer(category = initialState, action: ActionTypes) {
  switch (action.type) {
    case TypeAction.SET_ALL_CATEGORY:
      return action.payload.data;
  }
}

export { categoryReducer };
