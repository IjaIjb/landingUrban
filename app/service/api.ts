import axios from "axios";
import { getStoredAuthToken, removeStoredAuthToken } from "../shared/utils/ls";
import { toast } from "react-toastify";
import { throwError } from "rxjs";

// prod = https://lionfish-app-3tfc2.ondigitalocean.app"

export const envbaseURL = process.env.NEXT_PUBLIC_BASE_URL;
const http = axios.create({
  // baseURL: envbaseURL ?? "https://seashell-app-lq4vz.ondigitalocean.app",
  baseURL: envbaseURL ?? "https://lionfish-app-3tfc2.ondigitalocean.app",
});
http.interceptors.request.use(
  (request) => {
    //@ts-ignore
    request.headers = {
      "Content-Type": "application/json",
      Authorization: getStoredAuthToken()
        ? `Bearer ${getStoredAuthToken()}`
        : "",
    };
    request.data = request.data;
    return request;
  },
  (error) => {
    console.log("App can't make a request");
    return Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    console.log("response received");
    if (response?.data?.token) {
      // console.log(getStoredAuthToken());
    }
    return response.data;
  },
  (error) => {
    console.log(error);
    if (error?.response?.data?.authStatus === 403) {
      removeStoredAuthToken();
      window.location.assign("/login");
    }
    throw new Error(error?.response.data.error);
    // return error?.response.data;
    // return Promise.reject(error);
  }
);

export const handleError = (errorResponse: any) => {
  const unExpectedError = errorResponse?.response?.status >= 500;
  if (unExpectedError) {
    toast.error("An unexpected error occured.");
  }
  return throwError(() => errorResponse);
};

export default http;
