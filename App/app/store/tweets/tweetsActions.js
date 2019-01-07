export const FETCH_SEARCH_BEGIN = 'FETCH_SEARCH_BEGIN'
export const FETCH_SEARCH_SUCCESS = 'FETCH_SEARCH_SUCCESS'
export const FETCH_SEARCH_FAILURE = 'FETCH_SEARCH_FAILURE'
export const FETCH_MORE_RESULTS_REQUEST = 'FETCH_MORE_RESULTS_REQUEST'
export const FETCH_MORE_RESULTS_SUCCESS = 'FETCH_MORE_RESULTS_SUCCESS'
export const FETCH_MORE_RESULTS_FAILURE = 'FETCH_MORE_RESULTS_FAILURE'
export const FETCH_TIMELINE_BEGIN = 'FETCH_TIMELINE_BEGIN'
export const FETCH_TIMELINE_SUCCESS = 'FETCH_TIMELINE_SUCCESS'
export const FETCH_TIMELINE_FAILURE = 'FETCH_TIMELINE_FAILURE'
export const FETCH_MORE_TWEETS_REQUEST = 'FETCH_MORE_TWEETS_REQUEST'
export const FETCH_MORE_TWEETS_SUCCESS = 'FETCH_MORE_TWEETS_SUCCESS'
export const FETCH_MORE_TWEETS_FAILURE = 'FETCH_MORE_TWEETS_FAILURE'
export const FETCH_USERTIMELINE_BEGIN = 'FETCH_USERTIMELINE_BEGIN'
export const FETCH_USERTIMELINE_SUCCESS = 'FETCH_USERTIMELINE_SUCCESS'
export const FETCH_USERTIMELINE_FAILURE = 'FETCH_USERTIMELINE_FAILURE'
export const FETCH_SINGLETWEET_BEGIN = 'FETCH_SINGLETWEET_BEGIN'
export const FETCH_SINGLETWEET_SUCCESS = 'FETCH_SINGLETWEET_SUCCESS'
export const FETCH_SINGLETWEET_FAILURE = 'FETCH_SINGLETWEET_FAILURE'


export const fetchTweetsTimeline = () => ({
    type: FETCH_TIMELINE_BEGIN
})

export const fetchTimelineSuccess = (data) => ({
    type: FETCH_TIMELINE_SUCCESS,
    payload: data
})

export const fetchTimelineFailure = (error) => ({
    type: FETCH_TIMELINE_FAILURE,
    payload: error
})

export const fetchMoreTweets = () => ({
    type: FETCH_MORE_TWEETS_REQUEST,
})

export const fetchMoreTweetsSuccess = (data) => ({
    type: FETCH_MORE_TWEETS_SUCCESS,
    payload: data
})

export const fetchMoreTweetsFailure = (error) => ({
    type: FETCH_MORE_TWEETS_FAILURE,
    payload: error
})

export const fetchSearchBegin = (searchText) => ({
    type: FETCH_SEARCH_BEGIN,
    payload: searchText
});

export const fetchSearchSuccess = (twitsArray) => ({
    type: FETCH_SEARCH_SUCCESS,
    payload: twitsArray
});

export const fetchSearchError = error => ({
    type: FETCH_SEARCH_FAILURE,
    payload: error
});

export const fetchMoreResults = () => ({
    type: FETCH_MORE_RESULTS_REQUEST,
})

export const fetchMoreResultsSuccess = (data) => ({
    type: FETCH_MORE_RESULTS_SUCCESS,
    payload: data
})

export const fetchMoreResultsFailure = (error) => ({
    type: FETCH_MORE_RESULTS_FAILURE,
    payload: error
})

export const fetchUserTimelineBegin = () => ({
    type: FETCH_USERTIMELINE_BEGIN,
});

export const fetchUserTimelineSuccess = (twitsArray) => ({
    type: FETCH_USERTIMELINE_SUCCESS,
    payload: twitsArray
});

export const fetchUserTimelineError = error => ({
    type: FETCH_USERTIMELINE_FAILURE,
    payload: error
});

export const fetchSingleTweetBegin = (tweetId) => ({
    type: FETCH_SINGLETWEET_BEGIN,
    payload: tweetId
});

export const fetchSingleTweetSuccess = (tweet) => ({
    type: FETCH_SINGLETWEET_SUCCESS,
    payload: tweet
});

export const fetchSingleTweetError = error => ({
    type: FETCH_SINGLETWEET_FAILURE,
    payload: error
});