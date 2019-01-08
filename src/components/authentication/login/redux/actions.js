import {LOGIN_REQUEST, LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS} from './action-types';

export const login = (username, password) => ({
  type: LOGIN_REQUEST,
  payload: {
    method: 'POST',
    baseURL: 'http://192.168.42.115:3001',
    url: '/login',
    data: {
      username: username,
      password: password,
    }
  },
});

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
    payload
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_REQUEST_FAILURE,
    payload: error,
    error: true,
  };
};
