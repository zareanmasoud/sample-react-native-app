import {FETCH_PROFILE_REQUEST} from './action-types';
import initialState from '../../../../store/initial-state';
import {_SUCCESS, _FAILURE} from '../../../../store/constants';

export default function profileReducer(state = initialState.profile, action) {
  switch (action.type) {
    case FETCH_PROFILE_REQUEST:
      return {...state, pending: true};

    case FETCH_PROFILE_REQUEST + _SUCCESS:
      return {...state, pending: false, ...action.payload};

    case FETCH_PROFILE_REQUEST + _FAILURE:
      return {...state, pending: false, hasError: true, ...action.payload};

    default:
      return state;
  }
}
