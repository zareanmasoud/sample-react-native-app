import {
  FETCH_HANDICRAFTS_REQUEST,
  UPDATE_HANDICRAFT_CANCELED_REQUEST,
  UPDATE_HANDICRAFT_CHECKED_REQUEST,
  UPDATE_HANDICRAFT_VISITED_REQUEST,
} from './constants';
import initialState from '../../../store/initial-state';
import {_SUCCESS, _FAILURE} from '../../../store/constants';

export default function HandicraftsReducer(state = initialState.handicrafts, action) {
  const galleryId = (action.data && action.data.galleryId) ? action.data.galleryId : 0;

  switch (action.type) {
    case FETCH_HANDICRAFTS_REQUEST:
      return {
        ...state,
        [galleryId]: {...state[galleryId], pending: true}
      };

    case FETCH_HANDICRAFTS_REQUEST + _SUCCESS:
      return {
        ...state,
        [galleryId]: {...state[galleryId], pending: false, items: action.payload}
      };

    case FETCH_HANDICRAFTS_REQUEST + _FAILURE:
      return {
        ...state,
        [galleryId]: {...state[galleryId], pending: false, hasError: true, error: action.payload}
      };

    case UPDATE_HANDICRAFT_CHECKED_REQUEST:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => (
            hadicraft.id === action.payload.id ? {...hadicraft, pending: true} : hadicraft
          ))
        }
      };

    case UPDATE_HANDICRAFT_CHECKED_REQUEST + _SUCCESS:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => {
            if (hadicraft.id !== action.payload.id) {
              return hadicraft;
            }
            const new_hadicraft = {...hadicraft, ...action.payload};
            delete new_hadicraft.pending;
            return new_hadicraft;
          })
        }
      };

    case UPDATE_HANDICRAFT_CHECKED_REQUEST + _FAILURE:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => {
            if (hadicraft.id !== action.data.hadicraftId) {
              return hadicraft;
            }
            const new_hadicraft = {...hadicraft, hasError: true, error: action.payload};
            delete new_hadicraft.pending;
            return new_hadicraft;
          })
        }
      };

    case UPDATE_HANDICRAFT_CANCELED_REQUEST:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => (hadicraft.id === action.payload.id ? {
            ...hadicraft,
            pending: true
          } : hadicraft))
        }
      };

    case UPDATE_HANDICRAFT_CANCELED_REQUEST + _SUCCESS:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => {
            if (hadicraft.id !== action.payload.id) {
              return hadicraft;
            }
            const new_hadicraft = {...hadicraft, ...action.payload};
            delete new_hadicraft.pending;
            return new_hadicraft;
          })
        }
      };

    case UPDATE_HANDICRAFT_CANCELED_REQUEST + _FAILURE:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => {
            if (hadicraft.id !== action.data.hadicraftId) {
              return hadicraft;
            }
            const new_hadicraft = {...hadicraft, hasError: true, error: action.payload};
            delete new_hadicraft.pending;
            return new_hadicraft;
          })
        }
      };

    case UPDATE_HANDICRAFT_VISITED_REQUEST:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => (hadicraft.id === action.payload.id ? {
            ...hadicraft,
            pending: true
          } : hadicraft))
        }
      };

    case UPDATE_HANDICRAFT_VISITED_REQUEST + _SUCCESS:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => {
            if (hadicraft.id !== action.payload.id) {
              return hadicraft;
            }
            const new_hadicraft = {...hadicraft, ...action.payload};
            delete new_hadicraft.pending;
            return new_hadicraft;
          })
        }
      };

    case UPDATE_HANDICRAFT_VISITED_REQUEST + _FAILURE:
      return {
        ...state,
        [galleryId]: {
          ...state[galleryId],
          items: state[galleryId].items.map(hadicraft => {
            if (hadicraft.id !== action.data.hadicraftId) {
              return hadicraft;
            }
            const new_hadicraft = {...hadicraft, hasError: true, error: action.payload};
            delete new_hadicraft.pending;
            return new_hadicraft;
          })
        }
      };

    default:
      return state;
  }
}
