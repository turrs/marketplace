import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './Product/reducer';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
  useSelector,
} from 'react-redux';
import { categoryReducer } from './Category/reducer';
import { userReducer, usersLoginReducer } from './User/reducer';
import { cartReducer } from './Cart/reducer';

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    users: userReducer,
    usersLogin: usersLoginReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
