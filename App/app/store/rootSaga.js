import { all } from 'redux-saga/effects'
import {trendsSaga} from './trends/trendsSaga'
import { tweetsSaga } from './tweets/tweetsSaga';
import { userSaga } from './users/userSaga';

export default function* rootSaga() {
  yield all([
    tweetsSaga(),
    trendsSaga(),
    userSaga()
  ])
}
