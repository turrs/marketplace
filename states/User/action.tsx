import { ApiUser } from '../../utils/API';
import { AppDispatch } from '..';

const TypeAction = {
  SET_USER_LOGIN: 'SET_USER_LOGIN',
  SET_LOGIN: 'SET_LOGIN',
  SET_ALL_USERS: 'SET_ALL_USERS',
  SET_DELETE_USER_LOGIN: 'SET_DELETE_USER_LOGIN',
};

function setDeleteUserLogin() {
  return {
    type: TypeAction.SET_DELETE_USER_LOGIN,
  };
}

function setUserLogin(data: any) {
  return {
    type: TypeAction.SET_USER_LOGIN,
    payload: {
      data,
    },
  };
}
function setAllUsers(data: any) {
  return {
    type: TypeAction.SET_ALL_USERS,
    payload: {
      data,
    },
  };
}
function asyncGetAllUsers() {
  return async (AppDispatch: any) => {
    try {
      const response = await ApiUser.getAllUsers();
      AppDispatch(setAllUsers(response));
    } catch (error) {
      console.log(error);
    }
  };
}
async function asyncSetLogin(userName: string, password: string) {
  try {
    const token = await ApiUser.postLoginUser(userName, password);
    return token;
  } catch (error) {
    console.log(error);
  }
}

function saveAccessToken(token: string) {
  localStorage.setItem('accessToken', token);
}

function getAccessToken() {
  return localStorage.getItem('accessToken');
}

async function _fetchWithAuth(url: any, options: any = {}) {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
}
export {
  saveAccessToken,
  getAccessToken,
  _fetchWithAuth,
  TypeAction,
  setUserLogin,
  asyncSetLogin,
  setAllUsers,
  asyncGetAllUsers,
  setDeleteUserLogin,
};
