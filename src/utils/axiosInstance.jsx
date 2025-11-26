import axios from "axios";
import { ENV } from "../config/env.config";
import { getAccessToken } from "./Session";

console.log({ fffff: ENV.apiBaseUrl });


const axiosInstance = axios.create({
  baseURL: ENV.apiBaseUrl,
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.params = {
      ...config.params,
    //   lang: await getLang(),
    };
console.log({config})
    return config;
  },
  function (error) {

    console.log({ee2:error})
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    console.log("Response:", response);
    return response;
  },
  async function (error) {
    console.log({ee1:error})
    // const { disconnect } = useDisconnect();
    if (error.response && error.response.status === 401) {
      // await deleteCookies();
      // const getToken = await getAccessToken();
      // if (!getToken) {
      //   disconnect();
      // }
      console.error("Unauthorized, logging out...");
    }
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInstance;
