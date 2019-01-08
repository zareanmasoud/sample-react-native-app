import {FETCH_GALLERIES_REQUEST} from './action-types';
import {_SUCCESS, _FAILURE} from '../../../../store/constants';
import initialState from '../../../../store/initial-state';

export default function galleriesReducer(state = initialState.galleries, action) {
  switch (action.type) {
    case FETCH_GALLERIES_REQUEST:
      return Object.assign({}, state, {
        pending: true,
      });
    case FETCH_GALLERIES_REQUEST + _SUCCESS:
      return Object.assign({}, state, {
        pending: false,
        items: action.payload,
      });
    case FETCH_GALLERIES_REQUEST + _FAILURE:
      return Object.assign({}, state, {
        pending: false,
        hasError: true,
        error: action.payload
      });
    default:
      return state;
  }
}
