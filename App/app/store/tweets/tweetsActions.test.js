import { singleTweetData, tweetsArray } from "./tweetsMock";
import { fetchTweetsTimeline, 
  FETCH_TIMELINE_BEGIN, 
  fetchTimelineSuccess, 
  fetchTimelineFailure, 
  FETCH_TIMELINE_SUCCESS,
  FETCH_TIMELINE_FAILURE,
  FETCH_USERTIMELINE_BEGIN,
  FETCH_USERTIMELINE_SUCCESS,
  FETCH_USERTIMELINE_FAILURE,
  fetchUserTimelineBegin,
  fetchUserTimelineSuccess,
  fetchUserTimelineError,
  FETCH_MORE_TWEETS_REQUEST,
  FETCH_MORE_TWEETS_SUCCESS,
  FETCH_MORE_TWEETS_FAILURE,
  fetchMoreTweets,
  fetchMoreTweetsSuccess,
  fetchMoreTweetsFailure,
  FETCH_MORE_RESULTS_REQUEST,
  fetchMoreResults,
  fetchMoreResultsSuccess,
  fetchMoreResultsFailure,
  FETCH_MORE_RESULTS_FAILURE,
  FETCH_MORE_RESULTS_SUCCESS,
  fetchSearchBegin,
  fetchSearchSuccess,
  fetchSearchError,
  FETCH_SINGLETWEET_BEGIN,
  FETCH_SINGLETWEET_SUCCESS,
  FETCH_SINGLETWEET_FAILURE,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_SUCCESS,
  FETCH_SEARCH_BEGIN,
  fetchSingleTweetBegin,
  fetchSingleTweetSuccess,
  fetchSingleTweetError} from "./tweetsActions";

const inputObject = singleTweetData
const inputArray = tweetsArray
const error = 'Something happened'

//Timeline
it('action should request timeline', () => {
  const actionOutput = {
    type: FETCH_TIMELINE_BEGIN
  }
  expect(fetchTweetsTimeline()).toEqual(actionOutput)
});

it('action should return an array of timeline tweets', () => {
  const actionOutput = {
    type: FETCH_TIMELINE_SUCCESS,
    payload: inputArray
  }
  expect(fetchTimelineSuccess(inputArray)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_TIMELINE_FAILURE,
    payload: error
  }
  expect(fetchTimelineFailure(error)).toEqual(actionOutput)
});

//User timeline
it('action should request user timeline', () => {
  const actionOutput = {
    type: FETCH_USERTIMELINE_BEGIN
  }
  expect(fetchUserTimelineBegin()).toEqual(actionOutput)
});

it('action should return an array of user timeline tweets', () => {
  const actionOutput = {
    type: FETCH_USERTIMELINE_SUCCESS,
    payload: inputArray
  }
  expect(fetchUserTimelineSuccess(inputArray)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_USERTIMELINE_FAILURE,
    payload: error
  }
  expect(fetchUserTimelineError(error)).toEqual(actionOutput)
});

//Timeline infinite scroll
it('action should request more timeline tweets', () => {
  const actionOutput = {
    type: FETCH_MORE_TWEETS_REQUEST
  }
  expect(fetchMoreTweets()).toEqual(actionOutput)
});

it('action should return an array of timeline tweets', () => {
  const actionOutput = {
    type: FETCH_MORE_TWEETS_SUCCESS,
    payload: inputArray
  }
  expect(fetchMoreTweetsSuccess(inputArray)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_MORE_TWEETS_FAILURE,
    payload: error
  }
  expect(fetchMoreTweetsFailure(error)).toEqual(actionOutput)
});


//Search results
const searchText = 'Hola'
it('action should request search results', () => {
  const actionOutput = {
    type: FETCH_SEARCH_BEGIN,
    payload: searchText
  }
  expect(fetchSearchBegin(searchText)).toEqual(actionOutput)
});

it('action should return an array of results', () => {
  const actionOutput = {
    type: FETCH_SEARCH_SUCCESS,
    payload: inputArray
  }
  expect(fetchSearchSuccess(inputArray)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_SEARCH_FAILURE,
    payload: error
  }
  expect(fetchSearchError(error)).toEqual(actionOutput)
});


//Search results infinite scroll
it('action should request more search results', () => {
  const actionOutput = {
    type: FETCH_MORE_RESULTS_REQUEST
  }
  expect(fetchMoreResults()).toEqual(actionOutput)
});

it('action should return an array of results', () => {
  const actionOutput = {
    type: FETCH_MORE_RESULTS_SUCCESS,
    payload: inputArray
  }
  expect(fetchMoreResultsSuccess(inputArray)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_MORE_RESULTS_FAILURE,
    payload: error
  }
  expect(fetchMoreResultsFailure(error)).toEqual(actionOutput)
});

//Single tweet data
const tweetId = '4898354987'
it('action should request a single tweet\'s data', () => {
  const actionOutput = {
    type: FETCH_SINGLETWEET_BEGIN,
    payload: tweetId
  }
  expect(fetchSingleTweetBegin(tweetId)).toEqual(actionOutput)
});

it('action should return an object with a tweet\'s data', () => {
  const actionOutput = {
    type: FETCH_SINGLETWEET_SUCCESS,
    payload: inputObject
  }
  expect(fetchSingleTweetSuccess(inputObject)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_SINGLETWEET_FAILURE,
    payload: error
  }
  expect(fetchSingleTweetError(error)).toEqual(actionOutput)
});