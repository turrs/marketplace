import { fakeStoreApi } from '../../Axios';

const ApiUser = (() => {
  async function postLoginUser(userName: string, password: string) {
    const response = await fakeStoreApi.post('/auth/login', {
      username: userName,
      password: password,
    });
    return response.data.token;
  }
  async function getAllUsers() {
    const response = await fakeStoreApi.get('/users');
    return response.data;
  }
  return {
    postLoginUser,
    getAllUsers,
  };
})();

export { ApiUser };
