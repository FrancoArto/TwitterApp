import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import {FETCH_USERDATA_REQUEST, fetchUserDataSuccess, fetchUserDataFailure, uploadProfilePictureSuccess, uploadProfilePictureFailure, UPLOAD_PROFILE_PICTURE_REQUEST } from './userActions';
import { GET_USERDATA_URL, GET_CURRENTUSER_URL, UPLOAD_PROFILE_PICTURE_URL } from '../../api/apiUrls';
import { getUserId } from './userSelector';

export function* fetchUserData() {
  try {
    const userId = yield select(getUserId)
    let response;
    if (userId) {
      response = yield call(fetch, GET_USERDATA_URL(userId))
    } else {
      response = yield call(fetch, GET_CURRENTUSER_URL())
    }
    const data = yield call([response, "json"]);
    yield put(fetchUserDataSuccess(data))
  } catch (er) {
    yield put(fetchUserDataFailure(er))
  }
}

export function* userDataRequest() {
    yield takeLatest(FETCH_USERDATA_REQUEST, fetchUserData)   
}


export function* uploadProfilePicture(action) {

  try{
    var formData = new FormData()
    formData.append('image', 'data:image/png;base64,' + action.payload.base64)
    const response = yield call(fetch, UPLOAD_PROFILE_PICTURE_URL(), {
      method: 'POST',
      headers: new Headers({
        'Content-type': 'application/json'
      }),
      body: JSON.stringify({image: action.payload.base64})
    });
    console.log(response)
    const data = yield call([response, "json"]);
    
    yield put(uploadProfilePictureSuccess(data))
  }catch(er) {
    console.log(er)
    yield put(uploadProfilePictureFailure(er))
  }
}

export function* profilePicture() {
  yield takeLatest(UPLOAD_PROFILE_PICTURE_REQUEST, uploadProfilePicture)
}

export function* userSaga() {
  yield all([
    userDataRequest(),
    profilePicture()
  ])
}


