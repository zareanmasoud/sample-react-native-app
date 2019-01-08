import {LOGIN_REQUEST_FAILURE, LOGIN_REQUEST_SUCCESS} from './action-types';
import initialState from '../../../../store/initial-state';

export default function authenticationReducer(state = initialState.authentication, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        username: action.payload.username,
      });
    case LOGIN_REQUEST_FAILURE:
      return Object.assign({}, state, {
        loginFailed: true,
      });
    default:
      return state;
  }
}
