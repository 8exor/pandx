import axios from "axios";
import { ENV } from "../config/env.config";
import { deleteCookies, getAccessToken } from "./Session";
import { useDisconnect } from "@reown/appkit/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// console.log({ fffff: ENV.apiBaseUrl });


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
    const { disconnect } = useDisconnect();
    if (error.status === 401) {
      await deleteCookies();
      const getToken = await getAccessToken();
      console.log("what is get token : ", getToken)
      if (!getToken) {
        disconnect();
      }
      console.log("Unauthorized, logging out...");
    }
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInstance;
