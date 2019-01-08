import {call, put, takeEvery} from 'redux-saga/effects';
import {sendAuthorizedRequest} from '../api';
import {requestFailure, requestSuccess} from '../store/actions';
import {LOGIN_REQUEST} from '../components/authentication/login/redux/action-types';
import {_REQUEST} from '../store/constants';
import {addError} from '../components/error/redux/actions';
import {getAccessToken} from '../utils/storage';

function* requestSaga(action) {
  const accessToken = yield getAccessToken();
  // dispatch pending task with an ID
  const {response, error} = yield call(sendAuthorizedRequest, action.payload, accessToken);
  if (!error) {
    yield put(requestSuccess(action.type, response.data, action.data));
    // dispatch task change status to success
  } else {
    yield put(addError(action, error));
    yield put(requestFailure(action.type, error, action.data));
    // dispatch task change status to failure

    // dispatch add to tasked failed list
  }
}

export default function* watchRequest() {
  yield takeEvery(action => action.type !== LOGIN_REQUEST && action.type.endsWith(_REQUEST), requestSaga);
}
