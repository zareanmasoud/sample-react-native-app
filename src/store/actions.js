import {_FAILURE, _SUCCESS} from './constants';

export const requestSuccess = (type, response, data) => ({type: type + _SUCCESS, payload: response, data});

export const requestFailure = (type, error, data) => ({type: type + _FAILURE, payload: error, error: true, data});
