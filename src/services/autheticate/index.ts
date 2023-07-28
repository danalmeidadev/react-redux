import { APICore } from "../config";


const api = new APICore();

function loginApi(params: { email: string; password: string }) {
  const baseUrl = "auth/login/";
  return api.create(`${baseUrl}`, params);
}

function logoutApi() {
  const baseUrl = "/logout/";
  return api.create(`${baseUrl}`, {});
}

export { loginApi, logoutApi };
