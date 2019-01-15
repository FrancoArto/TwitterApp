import { takeLatest, put } from 'redux-saga/effects';
import { SETTINGS_NOTIFICATIONS_YES, SETTINGS_NOTIFICATIONS_NO } from './notificationsActions';
import { appViewsConfigs } from '../initialState';
import { settingsChanged } from '../settings/settingsActions';


const settings = appViewsConfigs

export function* notificationsSaga() {
  yield takeLatest(SETTINGS_NOTIFICATIONS_YES, onYesPress)
}


export function* onYesPress(action) {
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

