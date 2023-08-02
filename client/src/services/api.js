// apiService.js

import axios from 'axios';

const apiService = axios.create({
//   baseURL: 'https://gauravmehla-vigilant-barnacle-45rqq6w4vvfj64p-8081.preview.app.github.dev/', // Set your API base URL here
    baseURL: 'http://localhost:8081/',
    // baseURL: '/'
});

export const get = (url, config = {}) => {
  return apiService.get(url, config)
    .then(response => response.data)
    .catch(error => {
      throw new Error(`API GET request failed: ${error}`);
    });
};

export const post = (url, data = {}, config = {}) => {
  return apiService.post(url, data, config)
    .then(response => response.data)
    .catch(error => {
      throw new Error(`API POST request failed: ${error}`);
    });
};

export const put = (url, data = {}, config = {}) => {
    return apiService.put(url, data, config)
      .then(response => response.data)
      .catch(error => {
        throw new Error(`API PUT request failed: ${error}`);
      });
  };

export default apiService;