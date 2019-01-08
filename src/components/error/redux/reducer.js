import {ADD_ERROR, DELETE_ERROR} from './action-types';
import initialState from '../../../store/initial-state';

export default function errorsReducer(state = initialState.errors, action) {
  switch (action.type) {
    case ADD_ERROR:
      return [...state, {
        id: `${Date.now()}-${Math.floor(Math.random(1e8))}`,
        type: action.payload.actionType,
        message: action.payload.error.toString(),
      }];
    case DELETE_ERROR:
      return state.filter(error => error.id !== action.payload.id);
    default:
      return state;
  }
}
