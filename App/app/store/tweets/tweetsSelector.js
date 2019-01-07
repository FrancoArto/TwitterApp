export const getSearchText = state => state.tweetsReducer.searchText
export const getMaxId = state => state.tweetsReducer.data[state.tweetsReducer.data.length - 1].id
export const getFilteredTweets = state => {
  const timeline = state.tweetsReducer.data
  return timeline.filter(tweet => {
    if ((state.settingsReducer.verified === true) && (tweet.user.verified === false)) {
      return false;
    } else if ((state.settingsReducer.following === true) && (tweet.user.following === false)) {
      return false;
    } else if ((state.settingsReducer.defaultInfo === true) && (tweet.user.default_profile === true)) {
      return false;
    } else if ((state.settingsReducer.withLink === true) && (tweet.entities.urls.length > 0)) {
      return false;
    } else if ((state.settingsReducer.withTruncatedText === true) && (tweet.truncated === true)) {
      return false;
    } else {
      return true;
    }
  })
}
export const getSingleTweetId = state => state.tweetsReducer.singleTweetId