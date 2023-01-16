import { fakeStoreApi } from '../../Axios';

const ApiProduct = (() => {
  async function getProductData() {
    const response = await fakeStoreApi.get('/products');
    return response.data;
  }

  async function getCategoryProduct(category: any) {
    const response = await fakeStoreApi.get(`/products/category/${category}`);
    return response.data;
  }
  async function getSingleProduct(id: any) {
    const response = await fakeStoreApi.get(`/products/${id}`);
    return response.data;
  }
  return {
    getProductData,
    getSingleProduct,
    getCategoryProduct,
  };
})();

export { ApiProduct };
