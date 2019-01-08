import {AsyncStorage} from 'react-native';
import moment from 'moment-jalaali';
import {ACCESS_TOKEN, REFRESH_TOKEN} from './constants';

export function getAccessToken() {
  return AsyncStorage.getItem(ACCESS_TOKEN);
}

export function setAccessToken(accessToken) {
  AsyncStorage.setItem(ACCESS_TOKEN, JSON.stringify({
    token: accessToken,
    expiration: moment().add(3, 'minutes').unix()
  }));
}

export function getRefreshToken() {
  return AsyncStorage.getItem(REFRESH_TOKEN);
}

export function setRefreshToken(refreshToken) {
  AsyncStorage.setItem(REFRESH_TOKEN, JSON.stringify({
    token: refreshToken,
    expiration: moment().add(10, 'minutes').unix()
  }));
}
