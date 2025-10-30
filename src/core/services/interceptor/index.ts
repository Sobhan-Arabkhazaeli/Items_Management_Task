import axios, {AxiosError, type AxiosInstance, type AxiosResponse } from "axios";

// Base URL from environment variable
const baseURL: string | undefined = import.meta.env.VITE_BASE_URL;

// Create an Axios instance with the base URL
const instance: AxiosInstance = axios.create({
  baseURL,
});

// Success handler: returns only the response data
const onSuccess = <T>(response: AxiosResponse<T>): T => {
  return response;
};

// Error handler: alerts for client errors (4xx) and rejects the promise
const onError = (error: AxiosError): Promise<never> => {
  if (error.response) {
    const status = error.response.status;

    if (status >= 400 && status < 500) {
      console.log(`Client Error: ${status}`);
      return Promise.reject(error);
    }
  } else {
    console.error("Network or CORS error", error.message);
  }

  return Promise.reject(error);
};

instance.interceptors.response.use(onSuccess, onError);

export default instance;

