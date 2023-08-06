import axios, { HeadersDefaults } from "axios";
import Cookies from "js-cookie";

const axiosClient = axios.create();

// Replace this with our own backend base URL
axiosClient.defaults.baseURL = "http://localhost:8000";

export const BASE_URL = "http://localhost:8000";

type headers = {
  "Content-Type": string;
  Accept: string;
  Authorization: string;
};

// axiosClient.defaults.headers = {
//   "Content-Type": "application/json",
//   Accept: "application/json",
// } as headers & HeadersDefaults;

// Adding Authorization header for all requests

axiosClient.interceptors.request.use(
  (config) => {
    const token = Cookies.get("access_token");
    if (token) {
      // Configure this as per your backend requirements
      config.headers!["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;

    if (originalConfig.url !== "/user/login" && err.response) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;

        try {
          const rs = await axios.post(`${BASE_URL}/token/refresh/`, {
            refresh: Cookies.get("refresh_token")!,
          });

          // const access = rs.data.data["access"];

          Cookies.set("access_token", rs.data.access);

          return axiosClient(originalConfig);
        } catch (_error) {
          // toast.error("Session time out. Please login again.", {
          //   id: "sessionTimeOut",
          // });
          // Logging out the user by removing all the tokens from local
          // Redirecting the user to the landing page
          // window.location.href = "/account/login";
          Cookies.remove("access_token");
          Cookies.remove("refresh_token");
          // Cookies.remove("refresh_token");
          window.location.href = "/auth/login";
          return Promise.reject(_error);
        }
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;
