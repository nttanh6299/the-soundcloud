import axios from 'axios';
import camelize from 'camelize';
import { API_URL, TOKEN_API } from '../constants/urlApi';

// create instance normal
const customInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

// config header Authorization each send request
customInstance.interceptors.request.use(
  config => {
    // config.headers['Content-Type'] = 'application/json;charset=utf-8';
    // if (!config.headers['Authorization']) {
    //   config.headers['Authorization'] = `Bearer ${TOKEN_API}`;
    // }
    return config;
  },
  error => Promise.reject(error)
);

// handle response request
customInstance.interceptors.response.use(
  response => camelize(response.data),
  error => {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    if (error.response) {
      return Promise.reject(error.response);
    }
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    else if (error.request) {
      return Promise.reject(error.request);
    }
    // Something happened in setting up the request that triggered an Error
    else {
      return Promise.reject(error.message);
    }
  }
);

export async function fetchApi(
  endpoint,
  method = 'GET',
  body,
  params = {},
  sourceToken = null
) {
  return customInstance({
    method: method,
    url: endpoint,
    data: body,
    params: { ...params, client_id: TOKEN_API },
    cancelToken: sourceToken
  });
}

// fetch multiple request
export async function fetchAll(requests = []) {
  return axios.all(requests);
}
