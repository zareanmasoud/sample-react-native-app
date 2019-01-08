import {call, put, takeEvery} from 'redux-saga/effects';
import {loginFailure, loginSuccess} from './actions';
import {sendRequest} from '../../../../api';
import {LOGIN_REQUEST} from './action-types';
import {setAccessToken, setRefreshToken} from '../../../../utils/storage/index';

function* loginRequestSaga(action) {
  const {response, error} = yield call(sendRequest, action.payload);
  if (!error) {
    setAccessToken(response.data.access);
    setRefreshToken(response.data.refresh);
    yield put(loginSuccess(action.payload.data));
  } else yield put(loginFailure(error.data));
}

export default function* watchLoginRequest() {
  yield takeEvery(LOGIN_REQUEST, loginRequestSaga);
}
