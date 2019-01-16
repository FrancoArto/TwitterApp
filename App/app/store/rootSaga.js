import { all } from 'redux-saga/effects'
import {trendsSaga} from './trends/trendsSaga'
import { tweetsSaga } from './tweets/tweetsSaga';
import { userSaga } from './users/userSaga';
import { notificationsSaga } from './notifications/notificationsSaga';

export default function* rootSaga() {
  yield all([
    tweetsSaga(),
    trendsSaga(),
    userSaga(),
    notificationsSaga()
  ])
}
