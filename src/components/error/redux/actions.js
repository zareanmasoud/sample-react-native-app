import {ADD_ERROR, DELETE_ERROR} from './action-types';
import {_FAILURE} from '../../../store/constants';

export const addError = (action, error) => ({
  type: ADD_ERROR,
  payload: {actionType: action.type + _FAILURE, error},
});

export const deleteError = (errorId) => ({
  type: DELETE_ERROR,
  payload: {id: errorId},
});
