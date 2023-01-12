import { fakeStoreApi } from '../../Axios';

const ApiCategory = (() => {
  async function getAllCategory() {
    const response = await fakeStoreApi.get('/products/categories');
    return response.data;
  }
  return {
    getAllCategory,
  };
})();

export { ApiCategory };
