import { fakeStoreApi } from '../../Axios';

const ApiProduct = (() => {
  async function getProductData() {
    const response = await fakeStoreApi.get('/products');
    return response.data;
  }
  async function getSingleProduct(id: any) {
    const response = await fakeStoreApi.get(`/products/${id}`);
    return response.data;
  }
  return {
    getProductData,
    getSingleProduct,
  };
})();

export { ApiProduct };
