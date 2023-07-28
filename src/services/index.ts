import { APICore } from "./config";

const api = new APICore();


const usersList = async () => {
  const baseUrl = "users";
  return api.create(`${baseUrl}`, {});
};

const productList = async () => {
  const baseUrl = "product";
  return api.get(`${baseUrl}`, {});
};
const productId = async (id: string) => {
  const baseUrl = `product/${id}`;
  return api.get(`${baseUrl}`, {});
};

export {usersList, productList, productId}