import {
  FETCH_HANDICRAFTS_REQUEST,
  UPDATE_HANDICRAFT_CANCELED_REQUEST,
  UPDATE_HANDICRAFT_CHECKED_REQUEST,
  UPDATE_HANDICRAFT_VISITED_REQUEST,
} from './constants';

export function fetchHandicrafts(galleryId) {
  // TODO: wrap handicrafts by galleryId
  return {
    type: FETCH_HANDICRAFTS_REQUEST,
    payload: {method: 'GET', url: '/handicrafts', params: {galleryId}},
    data: {galleryId},
  };
}

export function setBookingChecked(hadicraftId, galleryId) {
  return {
    type: UPDATE_HANDICRAFT_CHECKED_REQUEST,
    payload: {
      method: 'PATCH',
      url: `/handicrafts/${hadicraftId}`,
      data: {'checked': true},
    },
    data: {hadicraftId, galleryId},
  };
}

export function setBookingCanceled(hadicraftId, cancel_description, galleryId) {
  return {
    type: UPDATE_HANDICRAFT_CANCELED_REQUEST,
    payload: {
      method: 'PATCH',
      url: `/handicrafts/${hadicraftId}`,
      data: {'canceled': true, cancel_description},
    },
    data: {hadicraftId, galleryId},
  };
}

export function setBookingVisited(hadicraftId, visited, galleryId) {
  return {
    type: UPDATE_HANDICRAFT_VISITED_REQUEST,
    payload: {
      method: 'PATCH',
      url: `/handicrafts/${hadicraftId}`,
      data: {'visited': visited},
    },
    data: {hadicraftId, galleryId},
  };
}
