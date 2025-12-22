import axios from "axios";
import { ENV } from "../config/env.config";
import { deleteCookies, getAccessToken } from "./Session";
import { useDisconnect } from "@reown/appkit/react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { logoutOnce } from "./logoutOnce";

// console.log({ fffff: ENV.apiBaseUrl });


const axiosInstance = axios.create({
  baseURL: ENV.apiBaseUrl,
  // timeout: 1000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});


axiosInstance.interceptors.request.use(
  async function (config) {
    const token =  getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.params = {
      ...config.params,
    //   lang: await getLang(),
    };

    return config;
  },
  function (error) {


    return Promise.reject(error);
  }
);



axiosInstance.interceptors.response.use(
  function (response) {
 
    return response;
  },
  async function (error) {
//  console.log("wja res[p stiaut amd eprpr : ", error.response.status)
    if ( error.response.status &&  error.response.status === 401) {
    
      console.error("Unauthorized, logging out...");
      logoutOnce();
    }
    return Promise.reject(error?.response?.data);
  }
);

export default axiosInstance;
