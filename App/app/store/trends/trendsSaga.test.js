import { fetchTrends } from "./trendsSaga";
import { call, put } from 'redux-saga/effects'
import { GET_ARGTRENDS_URL } from "../../api/apiUrls";
import { trendsArray } from "./trendsMock";
import { FETCH_TRENDS_SUCCESS, FETCH_TRENDS_FAILURE } from "./trendsActions";

describe('trends saga', () => {

  const promise = {
    then: () => { },
    json: () => {
      foo: 'bar'
    }
  }

  const badPromise = {
    then: () => { },
    json: () => {
    }
  }
  it('should fetch trends', () => {
    const action = {
      type: FETCH_TRENDS_SUCCESS,
      payload: trendsArray[0].trends
    }
    const generator = fetchTrends()

    let next = generator.next();
    const url = GET_ARGTRENDS_URL()
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(trendsArray)
    expect(next.value).toEqual(put(action))

  });

  it('should fail to fetch trends', () => {
    const action = {
      type: FETCH_TRENDS_FAILURE,
      payload: 'Error'
    }
    const generator = fetchTrends()

    let next = generator.next();
    const url = GET_ARGTRENDS_URL()
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });
})
