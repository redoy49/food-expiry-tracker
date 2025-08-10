import React from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { user } = useAuth();

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user?.accessToken}`;
    return config;
  });

  // axiosInstance.interceptors.response.use(
  //   (res) => {
  //     return res;
  //   },
  //   (err) => {
  //     if (err.status === 401 || err.status === 403) {
  //       logout()
  //         .then(() => {
  //           console.log(`Your are logout for ${err.status} code`);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //         });
  //     }
  //     return Promise.reject(err);
  //   }
  // );

  return axiosInstance;
};

export default useAxiosSecure;


