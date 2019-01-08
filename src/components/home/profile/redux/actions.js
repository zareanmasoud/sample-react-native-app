import {FETCH_PROFILE_REQUEST} from './action-types';

export function fetchProfile() {
  return {
    type: FETCH_PROFILE_REQUEST,
    payload: {method: 'GET', url: '/profile'},
  };
}
