import { GET_SEARCHTWEETS_URL, GET_APPENDRESULTS_URL, GET_TIMELINE_URL, GET_APPENDTWEETS_URL, GET_USERTIMELINE_URL, GET_SINGLETWEET_URL } from '../../api/apiUrls';
import { takeLatest, put, call, select, all } from 'redux-saga/effects';
import { FETCH_SEARCH_BEGIN, 
  fetchSearchSuccess, 
  fetchSearchError, 
  FETCH_MORE_RESULTS_REQUEST, 
  fetchMoreResultsSuccess, 
  fetchMoreResultsFailure,
  FETCH_TIMELINE_BEGIN, 
  fetchTimelineSuccess, 
  fetchTimelineFailure, 
  FETCH_MORE_TWEETS_REQUEST, 
  fetchMoreTweetsSuccess, 
  fetchMoreTweetsFailure,
  fetchUserTimelineSuccess,
  fetchUserTimelineError,
  FETCH_USERTIMELINE_BEGIN,
  fetchUserTimelineBegin,
  FETCH_SINGLETWEET_BEGIN,
  fetchSingleTweetSuccess,
  fetchSingleTweetError
} from './tweetsActions';
import { getMaxId, getSearchText, getSingleTweetId } from './tweetsSelector';
import { FETCH_USERDATA_SUCCESS } from '../users/userActions';
import { getUser } from '../users/userSelector';

const count = 50


export function* fetchSearchResults() {  
  try {
    const searchText = yield select(getSearchText)
    const response = yield call(fetch, GET_SEARCHTWEETS_URL(searchText))
    const data = yield call([response, "json"]);
    yield put(fetchSearchSuccess(data.statuses))
  } catch (er) {
    yield put(fetchSearchError(er))
  }
}

function* searchTweets() {
  yield takeLatest(FETCH_SEARCH_BEGIN, fetchSearchResults)   
}


export function* fetchResultsToAppend() {
  try {
    const searchText = yield select(getSearchText)
    const maxId = yield select(getMaxId)
    const response = yield call(fetch, GET_APPENDRESULTS_URL(searchText, count, maxId))
    const results = yield call([response, "json"]);
    yield put(fetchMoreResultsSuccess(results.statuses.slice(1)))
  } catch (er) {
    yield put(fetchMoreResultsFailure(er))
  }
}

function* appendResults() {
  yield takeLatest(FETCH_MORE_RESULTS_REQUEST, fetchResultsToAppend)   
}




export function* fetchTimeline() {
  try {
    const response = yield call(fetch, GET_TIMELINE_URL(count))
    const data = yield call([response, "json"]);
    yield put(fetchTimelineSuccess(data))
  } catch (er) {
    yield put(fetchTimelineFailure(er))
  }
}

function* loadTimeline() {
  yield takeLatest(FETCH_TIMELINE_BEGIN, fetchTimeline)   
}



export function* fetchTweetsToAppend() {
  try {
    const maxId = yield select(getMaxId)
    const response = yield call(fetch, GET_APPENDTWEETS_URL(count, maxId))
    const array = yield call([response, "json"]);
    yield put(fetchMoreTweetsSuccess(array.slice(1)))
  } catch (er) {
    yield put(fetchMoreTweetsFailure(er))
  }
}

function* appendTweets() {
  yield takeLatest(FETCH_MORE_TWEETS_REQUEST, fetchTweetsToAppend)   
}

export function* fetchUserTimeline() {
  try {
    const user = yield select(getUser)
    const response = yield call(fetch, GET_USERTIMELINE_URL(user, count))
    const data = yield call([response, "json"]);
    yield put(fetchUserTimelineSuccess(data))
  } catch (er) {
    yield put(fetchUserTimelineError(er))
  }
}

function* userDataSucceeded() {
  yield takeLatest(FETCH_USERDATA_SUCCESS, requestUserTimelineFetch)
}

export function* requestUserTimelineFetch() {
  yield put(fetchUserTimelineBegin())
}


function* userTimeline() {
  yield takeLatest(FETCH_USERTIMELINE_BEGIN, fetchUserTimeline)
}

export function* fetchSingleTweet() {
  try {
    const tweetId = yield select(getSingleTweetId)
    const response = yield call(fetch, GET_SINGLETWEET_URL(tweetId))
    const data = yield call([response, "json"]);
    yield put(fetchSingleTweetSuccess(data))
  } catch (er) {
    yield put(fetchSingleTweetError(er))
  }
}

function* singleTweet() {
  yield takeLatest(FETCH_SINGLETWEET_BEGIN, fetchSingleTweet)
}


export function* tweetsSaga() {
  yield all([
    loadTimeline(),
    appendTweets(),
    searchTweets(),
    appendResults(),
    userDataSucceeded(),
    userTimeline(),
    singleTweet()
  ])
}