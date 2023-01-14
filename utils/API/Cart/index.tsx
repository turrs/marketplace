import { fakeStoreApi } from '../../Axios';

const ApiCartUser = (() => {
  async function getAllCart(id: number) {
    const response = await fakeStoreApi.get(`/carts/${id}`);
    return response.data.products;
  }
  return {
    getAllCart,
  };
})();

export { ApiCartUser };
