import { tweetsArray, singleTweetData } from "./tweetsMock";
import { getSearchText, getMaxId, getSingleTweetId, getFilteredTweets } from "./tweetsSelector";

const state = {
  tweetsReducer: {
    data: tweetsArray,
    loading: false,
    loadingSingleTweet: false,
    error: 'Something happened',
    searchText: 'Hola',
    searchResults: tweetsArray,
    userTimeline: tweetsArray,
    singleTweetId: '68787697',
    singleTweet: singleTweetData
  },
  settingsReducer: {
    verified: false,
    following: false,
    defaultInfo: false,
    withLink: false,
    withTruncatedText: false
  }
};

it('should get search text', () => {
  expect(getSearchText(state)).toEqual(state.tweetsReducer.searchText)
})

it('should get id of last tweet', () => {
  expect(getMaxId(state)).toEqual(state.tweetsReducer.data[state.tweetsReducer.data.length - 1].id)
})

it('should get single tweet\'s id', () => {
  expect(getSingleTweetId(state)).toEqual(state.tweetsReducer.singleTweetId)
})

it('should get all tweets', () => {
  expect(getFilteredTweets(state)).toEqual(state.tweetsReducer.data)
})

it('should get tweets from users with verified accounts', () => {
  state.settingsReducer.verified = true
  expect(getFilteredTweets(state)).toEqual([state.tweetsReducer.data[0], state.tweetsReducer.data[1]])
  state.settingsReducer.verified = false
})

it('should get tweets from followed users', () => {
  state.settingsReducer.following = true
  expect(getFilteredTweets(state)).toEqual(state.tweetsReducer.data)
  state.settingsReducer.following = false
})

it('should get tweets from users without default info', () => {
  state.settingsReducer.defaultInfo = true
  expect(getFilteredTweets(state)).toEqual(state.tweetsReducer.data)
  state.settingsReducer.defaultInfo = false
})

it('should get tweets that do not contain a link', () => {
  state.settingsReducer.withLink = true
  expect(getFilteredTweets(state)).toEqual([])
  state.settingsReducer.withLink = false
})

it('should get tweets without truncated text', () => {
  state.settingsReducer.withTruncatedText = true
  expect(getFilteredTweets(state)).toEqual([state.tweetsReducer.data[1], state.tweetsReducer.data[3]])
  state.settingsReducer.withTruncatedText = false
})

