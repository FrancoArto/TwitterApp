const tweetsInitialState = {
    data: [],
    loading: false,
    loadingSingleTweet: false,
    error: null,
    searchText: null,
    searchResults: [],
    userTimeline: [],
    singleTweetId: null,
    singleTweet: {}
};

const userInitialState = {
    loading: false,
    error: null,
    userId: null,
    userData: {}
}

const trendsInitialState = {
    data: [],
    loading: false,
    error: null,
}

//False is for 'not checked'
const appViewsConfigs = {
    verified: false,
    following: false,
    defaultInfo: false,
    withLink: false,
    withTruncatedText: false
}


export { tweetsInitialState, appViewsConfigs, userInitialState, trendsInitialState };