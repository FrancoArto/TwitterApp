import { takeLatest, put, call, select } from 'redux-saga/effects';
import { FETCH_TimelineForUser_BEGIN, fetchTimelineForUserSuccess, fetchTimelineForUserError, FETCH_USERDATA_REQUEST, fetchUserDataSuccess, fetchUserDataFailure } from './userActions';
import { GET_USERTIMELINE_URL, GET_USERDATA_URL } from '../../api/apiUrls';
import { getUser } from './userSelector';

export function* fetchUserData() {
  try {
    const userId = yield select(getUser)
    const response = yield call(fetch, GET_USERDATA_URL(userId))
    const data = yield call([response, "json"]);
    yield put(fetchUserDataSuccess(data))
  } catch (er) {
    yield put(fetchUserDataFailure(er))
  }
}


export function* userSaga() {
    yield takeLatest(FETCH_USERDATA_REQUEST, fetchUserData)   
}