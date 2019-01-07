import tweetsReducer from "./tweetsReducer";
import { singleTweetData, tweetsArray } from "./tweetsMock";
import { tweetsInitialState } from "../initialState";
import { FETCH_TIMELINE_BEGIN, FETCH_TIMELINE_SUCCESS, FETCH_TIMELINE_FAILURE, FETCH_USERTIMELINE_BEGIN, FETCH_USERTIMELINE_SUCCESS, FETCH_USERTIMELINE_FAILURE, FETCH_MORE_TWEETS_REQUEST, FETCH_MORE_TWEETS_SUCCESS, FETCH_MORE_TWEETS_FAILURE, FETCH_SEARCH_BEGIN, FETCH_SEARCH_SUCCESS, FETCH_SEARCH_FAILURE, FETCH_MORE_RESULTS_REQUEST, FETCH_MORE_RESULTS_SUCCESS, FETCH_MORE_RESULTS_FAILURE, FETCH_SINGLETWEET_BEGIN, FETCH_SINGLETWEET_SUCCESS, FETCH_SINGLETWEET_FAILURE } from "./tweetsActions";

const inputObject = singleTweetData
const inputArray = tweetsArray
const error = 'Something happened'
const initialState = tweetsInitialState
//Timeline
it('should request timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: true,
    error: null,
  }
  const action = {
    type: FETCH_TIMELINE_BEGIN
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should save an array of timeline tweets to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    data: inputArray
  }
  const action = {
    type: FETCH_TIMELINE_SUCCESS,
    payload: inputArray
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    data: []
  }
  const action = {
    type: FETCH_TIMELINE_FAILURE,
    payload: error
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

//User timeline
it('should request user timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: true,
    error: null,
  }
  const action = {
    type: FETCH_USERTIMELINE_BEGIN,
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an array of user timeline tweets to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    userTimeline: inputArray
  }
  const action = {
    type: FETCH_USERTIMELINE_SUCCESS,
    payload: inputArray
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    userTimeline: []
  }
  const action = {
    type: FETCH_USERTIMELINE_FAILURE,
    payload: error
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

//Timeline infinite scroll
it('should request tweets to append to timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
  }
  const action = {
    type: FETCH_MORE_TWEETS_REQUEST,
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should append tweets to timeline', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    data: inputArray
  }
  const action = {
    type: FETCH_MORE_TWEETS_SUCCESS,
    payload: inputArray
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    data: []
  }
  const action = {
    type: FETCH_MORE_TWEETS_FAILURE,
    payload: error
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});


//Search results
const searchText = 'Hola'
it('should request search results', () => {
  const expectedOutput = {
    ...initialState,
    loading: true,
    error: null,
    searchText: searchText
  }
  const action = {
    type: FETCH_SEARCH_BEGIN,
    payload: searchText
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an array of results to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    searchResults: inputArray,
  }
  const action = {
    type: FETCH_SEARCH_SUCCESS,
    payload: inputArray
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    searchResults: []
  }
  const action = {
    type: FETCH_SEARCH_FAILURE,
    payload: error
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});


//Search results infinite scroll
it('should request more search results', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
  }
  const action = {
    type: FETCH_MORE_RESULTS_REQUEST,
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should append an array of results', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: null,
    searchResults: inputArray,
  }
  const action = {
    type: FETCH_MORE_RESULTS_SUCCESS,
    payload: inputArray
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loading: false,
    error: error,
    searchResults: []
  }
  const action = {
    type: FETCH_MORE_RESULTS_FAILURE,
    payload: error
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

//Single tweet data
const tweetId = '4898354987'
it('should request a single tweet\'s data', () => {
  const expectedOutput = {
    ...initialState,
    loadingSingleTweet: true,
    error: null,
    singleTweetId: tweetId
  }
  const action = {
    type: FETCH_SINGLETWEET_BEGIN,
    payload: tweetId
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an object with a tweet\'s data to state', () => {
  const expectedOutput = {
    ...initialState,
    loadingSingleTweet: false,
    error: null,
    singleTweet: inputObject
  }
  const action = {
    type: FETCH_SINGLETWEET_SUCCESS,
    payload: inputObject
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});

it('should set an error message to state', () => {
  const expectedOutput = {
    ...initialState,
    loadingSingleTweet: false,
    error: error,
    singleTweet: {},
    singleTweetId: null
  }
  const action = {
    type: FETCH_SINGLETWEET_FAILURE,
    payload: error
  }
  expect(tweetsReducer(initialState, action)).toEqual(expectedOutput)
});