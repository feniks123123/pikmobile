import axios from 'axios';
import clientRendering from './clientRendering';

let API_URL = 'https://api.pik.ru/v1';

if(!clientRendering) {
  // API_URL = 'http://api.pik.ru.rogutri.dev4.pikweb.net/v1';
  API_URL = 'http://api.pik-service.ru/v1';
}

if(process.env.NODE_ENV === 'test') {
  API_URL = 'http://api.pik.ru.test3.pikweb.net/v1';
}

const http = {
  get: (url, headers = {}) => new Promise((reject, resolve) => {
    axios({
      method: 'get',
      url   : API_URL + url,
      headers
    })
      .then(function ({ data }) {
        reject(data);
      })
      .catch(function ({ response }) {
        resolve(response);
      });
  }),
  post: (url, data, headers = {}) => new Promise((reject, resolve) => {
    axios({
      method : 'post',
      url    : API_URL + url,
      data,
      headers: {
        ...headers,
        'Accept'      : '*/*',
        'Content-Type': 'text/plain',
      }
    })
      .then(function ({ data }) {
        reject(data);
      })
      .catch(function ({ response }) {
        resolve(response);
      });
  }),
  put: (url, data, headers = {}) => new Promise((reject, resolve) => {
    axios({
      method : 'put',
      url    : API_URL + url,
      data,
      headers: {
        ...headers,
        'Accept'      : '*/*',
        'Content-Type': 'text/plain'
      }
    })
      .then(function ({ data }) {
        reject(data);
      })
      .catch(function ({ response }) {
        resolve(response);
      });
  }),
  delete: (url, headers = {}, data) => new Promise((reject, resolve) => {
    axios({
      method : 'delete',
      url    : API_URL + url,
      data,
      headers: {
        ...headers,
        'Accept'      : '*/*',
        'Content-Type': 'text/plain',
      }
    })
      .then(function ({ data }) {
        reject(data);
      })
      .catch(function ({ response }) {
        resolve(response);
      });
  })
};

export default http;