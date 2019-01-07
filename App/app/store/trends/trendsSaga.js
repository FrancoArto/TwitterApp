import { FETCH_TRENDS_BEGIN, fetchTrendsSuccess, fetchTrendsError } from './trendsActions';
import { takeLatest, put, call } from 'redux-saga/effects';
import { GET_ARGTRENDS_URL } from '../../api/apiUrls';

export function* trendsSaga() {
  yield takeLatest(FETCH_TRENDS_BEGIN, fetchTrends)  
}

export function* fetchTrends() {
  try {
    const response = yield call(fetch, GET_ARGTRENDS_URL())
    const data = yield call([response, "json"]);
    yield put(fetchTrendsSuccess(data[0].trends))
  } catch (er) {
    yield put(fetchTrendsError(er))
  }  
}