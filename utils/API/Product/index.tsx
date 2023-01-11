import { fakeStoreApi } from '../../Axios';

const ApiProduct = (() => {
  async function getProductData() {
    const response = await fakeStoreApi.get('/products');
    return response.data;
  }
  return {
    getProductData,
  };
})();

export { ApiProduct };
