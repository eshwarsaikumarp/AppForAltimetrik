import axios from "axios";
import NavigateTo from "../Helpers/History";

const errorHandler = (error) => {
  if (!error.response) {
    // navigateTo.push("/networkError");
  }
  if (error.response.data.message === "jwt expired") {
    NavigateTo.push("/login");
  }
  return Promise.reject({ ...error });
};

const successHandler = (response) => {
  return response;
};

const defaultOptions = {
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 300000,
};

// Create instance
let Api = axios.create(defaultOptions);

// Set the AUTH token for any request
Api.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

Api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  config.headers.Authorization = token ? token : "";
  return config;
});

export default Api;