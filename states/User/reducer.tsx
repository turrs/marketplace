import { TypeAction } from './action';
import { UserActionTypes, UserLoginActionTypes } from './type.d';

const initialState = [{}];
function userReducer(userState = initialState, action: UserActionTypes) {
  switch (action.type) {
    case TypeAction.SET_ALL_USERS:
      return action.payload.data;
    default:
      return userState;
  }
}

const initialStateUsers: any = {};
function usersLoginReducer(
  usersLogin = initialStateUsers,
  action: UserLoginActionTypes,
) {
  switch (action.type) {
    case TypeAction.SET_USER_LOGIN:
      return action.payload.data;
    case TypeAction.SET_DELETE_USER_LOGIN:
      return initialState;
    default:
      return usersLogin;
  }
}

export { userReducer, usersLoginReducer };
