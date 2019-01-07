import {call, put, select} from 'redux-saga/effects'
import { fetchTimeline, fetchTweetsToAppend, fetchSearchResults, fetchResultsToAppend, fetchUserTimeline, fetchSingleTweet, requestUserTimelineFetch } from "./tweetsSaga";
import { GET_TIMELINE_URL, GET_APPENDRESULTS_URL, GET_APPENDTWEETS_URL, GET_SEARCHTWEETS_URL, GET_USERTIMELINE_URL, GET_SINGLETWEET_URL } from "../../api/apiUrls";
import { getMaxId, getSearchText, getSingleTweetId } from './tweetsSelector';
import { getUser } from '../users/userSelector';
import { tweetsArray, singleTweetData, searchResultsMock } from './tweetsMock';
import { FETCH_TIMELINE_SUCCESS, FETCH_MORE_RESULTS_SUCCESS, FETCH_SEARCH_SUCCESS, FETCH_MORE_TWEETS_SUCCESS, FETCH_USERTIMELINE_SUCCESS, FETCH_SINGLETWEET_SUCCESS, FETCH_TIMELINE_FAILURE, FETCH_MORE_TWEETS_FAILURE, fetchMoreTweets, FETCH_SEARCH_FAILURE, FETCH_MORE_RESULTS_FAILURE, FETCH_USERTIMELINE_FAILURE, FETCH_SINGLETWEET_FAILURE, FETCH_USERTIMELINE_BEGIN } from './tweetsActions';

describe('tweets saga', () => {
  const promise = {
    then: () => {},
    json: () => {
      foo: 'bar'
    }
  }
  const badPromise = {
    then: () => { },
    json: () => {
    }
  }

  it('should fetch timeline', () => {
    const action = {
      type: FETCH_TIMELINE_SUCCESS,
      payload: tweetsArray
    }
    const generator = fetchTimeline()    
    let next = generator.next();
    const url = GET_TIMELINE_URL(50)
    expect(next.value).toEqual(call(fetch, url));    
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(tweetsArray)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to fetch timeline', () => {
    const action = {
      type: FETCH_TIMELINE_FAILURE,
      payload: 'Error'
    }
    const generator = fetchTimeline()

    let next = generator.next();
    const url = GET_TIMELINE_URL(50)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });
  
  it('should fetch tweets to append to timeline', () => {
    const action = {
      type: FETCH_MORE_TWEETS_SUCCESS,
      payload: tweetsArray.slice(1)
    }
    const generator = fetchTweetsToAppend()
    
    const maxId = 2135498
    let next = generator.next();
    expect(next.value).toEqual(select(getMaxId))
    next = generator.next(maxId)
    const url = GET_APPENDTWEETS_URL(50, maxId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(tweetsArray)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to append tweets to timeline', () => {
    const action = {
      type: FETCH_MORE_TWEETS_FAILURE,
      payload: 'Error'
    }
    const generator = fetchTweetsToAppend()

    const maxId = 2135498
    let next = generator.next();
    expect(next.value).toEqual(select(getMaxId))
    next = generator.next(maxId)
    const url = GET_APPENDTWEETS_URL(50, maxId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });

  it('should fetch search results', () => {
    const action = {
      type: FETCH_SEARCH_SUCCESS,
      payload: searchResultsMock.statuses
    }
    const generator = fetchSearchResults()
    
    const searchText = 'Hola'
    let next = generator.next();
    expect(next.value).toEqual(select(getSearchText))
    next = generator.next(searchText)
    const url = GET_SEARCHTWEETS_URL(searchText)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(searchResultsMock)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to fetch results', () => {
    const action = {
      type: FETCH_SEARCH_FAILURE,
      payload: 'Error'
    }
    const generator = fetchSearchResults()

    const searchText = 'Hola'
    let next = generator.next();
    expect(next.value).toEqual(select(getSearchText))
    next = generator.next(searchText)
    const url = GET_SEARCHTWEETS_URL(searchText)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });


  it('should fetch search results to append', () => {
    const action = {
      type: FETCH_MORE_RESULTS_SUCCESS,
      payload: searchResultsMock.statuses.slice(1)
    }
    const generator = fetchResultsToAppend()
    
    const searchText = 'Hola'
    const maxId = 2135498

    let next = generator.next();
    expect(next.value).toEqual(select(getSearchText))
    next = generator.next(searchText)
    expect(next.value).toEqual(select(getMaxId))
    next = generator.next(maxId)
    const url = GET_APPENDRESULTS_URL(searchText, 50, maxId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(searchResultsMock)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to fetch results to append', () => {
    const action = {
      type: FETCH_MORE_RESULTS_FAILURE,
      payload: 'Error'
    }
    const generator = fetchResultsToAppend()
    
    const searchText = 'Hola'
    const maxId = 2135498

    let next = generator.next();
    expect(next.value).toEqual(select(getSearchText))
    next = generator.next(searchText)
    expect(next.value).toEqual(select(getMaxId))
    next = generator.next(maxId)
    const url = GET_APPENDRESULTS_URL(searchText, 50, maxId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });

  it('should fetch user timeline', () => {
    const action = {
      type: FETCH_USERTIMELINE_SUCCESS,
      payload: tweetsArray
    }
    const generator = fetchUserTimeline()
    
    const userId = 9876387
    let next = generator.next();
    expect(next.value).toEqual(select(getUser))
    next = generator.next(userId)
    const url = GET_USERTIMELINE_URL(userId, 50)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(tweetsArray)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to fetch user timeline', () => {
    const action = {
      type: FETCH_USERTIMELINE_FAILURE,
      payload: 'Error'
    }
    const generator = fetchUserTimeline()
    
    const userId = 9876387
    let next = generator.next();
    expect(next.value).toEqual(select(getUser))
    next = generator.next(userId)
    const url = GET_USERTIMELINE_URL(userId, 50)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });


  it('should fetch a single tweet', () => {
    const action = {
      type: FETCH_SINGLETWEET_SUCCESS,
      payload: singleTweetData
    }
    const generator = fetchSingleTweet()
    
    const tweetId = 9876387
    let next = generator.next();
    expect(next.value).toEqual(select(getSingleTweetId))
    next = generator.next(tweetId)
    const url = GET_SINGLETWEET_URL(tweetId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(singleTweetData)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to fetch a single tweet', () => {
    const action = {
      type: FETCH_SINGLETWEET_FAILURE,
      payload: 'Error'
    }
    const generator = fetchSingleTweet()
    
    const tweetId = 9876387
    let next = generator.next();
    expect(next.value).toEqual(select(getSingleTweetId))
    next = generator.next(tweetId)
    const url = GET_SINGLETWEET_URL(tweetId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });

  it('should request user timeline fetch', () => {
    const action = {
      type: FETCH_USERTIMELINE_BEGIN,
    }
    const generator = requestUserTimelineFetch()
    
    let next = generator.next();
    expect(next.value).toEqual(put(action))
 
  });


})