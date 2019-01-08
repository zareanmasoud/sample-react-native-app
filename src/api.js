import axios from 'axios';

const BASE_URL = 'http://192.168.42.115:3000';

export function sendRequest(request) {
  !request.baseURL && (request.baseURL = BASE_URL);
  if (request.method !== 'GET') {
    request.headers = request.headers || {};
    request.headers['Content-Type'] = 'application/json';
  }
  // request.timeout = 10000;
  return axios(request)
    .then(response => {
      return {response};
    })
    .catch(error => {
      return {error};
    });
}

export function sendAuthorizedRequest(request) {
  // request.headers = request.headers || {};
  // request.headers.Authorization = 'Bearer ' + token;
  return sendRequest(request);
}
