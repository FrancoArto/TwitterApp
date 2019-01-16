import { takeLatest, put } from 'redux-saga/effects';
import { SETTINGS_NOTIFICATIONS_YES } from './notificationsActions';
import { settingsChanged } from '../settings/settingsActions';
import store from '../store';



export function* notificationsSaga() {
  yield takeLatest(SETTINGS_NOTIFICATIONS_YES, onYesPress)
}


export function* onYesPress(action) {

  let storeState = store.getState()
  let settings = Object.assign({}, storeState.settingsReducer)

  switch (action.payload) {
    case '1':
      settings.verified = false
      break;

    case '2':
      settings.following = false
      break;
    case '3':
      settings.defaultInfo = false
      break;
    case '4':
      settings.withLink = false
      break;
    case '5':
      settings.withTruncatedText = false
      break;
    default:
  }
  yield put(settingsChanged(settings))
}

