import axios from "axios";

// for intercepting requests
axios.interceptors.request.use((config) => {
  const token = "Bearer Token";
  config.headers.Authorization = token;
  return config;
});

// for intercepting responses
axios.interceptors.response.use(
  (response) => {
    // do something with the response
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
