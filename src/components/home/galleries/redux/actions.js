import {FETCH_GALLERIES_REQUEST} from './action-types';

export const fetchGalleries = () => ({type: FETCH_GALLERIES_REQUEST, payload: {method: 'GET', url: '/galleries'}});
