import {call, put, select} from 'redux-saga/effects'
import { fetchUserData } from "./userSaga";
import { GET_USERDATA_URL } from "../../api/apiUrls";
import { getUser } from './userSelector';
import { FETCH_USERDATA_SUCCESS, FETCH_USERDATA_FAILURE } from './userActions';
import userMock from './userMock';

describe('user saga', () => {
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
  it('should fetch user data', () => {
    const action = {
      type: FETCH_USERDATA_SUCCESS,
      payload: userMock
    }
    const generator = fetchUserData()
    
    const userId = 2135498
    let next = generator.next();
    expect(next.value).toEqual(select(getUser))
    next = generator.next(userId)
    const url = GET_USERDATA_URL(userId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(promise);
    expect(next.value).toEqual(call([promise, "json"]));
    next = generator.next(userMock)
    expect(next.value).toEqual(put(action))
 
  });

  it('should fail to fetch user data', () => {
    const action = {
      type: FETCH_USERDATA_FAILURE,
      payload: 'Error'
    }
    const generator = fetchUserData()

    const userId = 2135498
    let next = generator.next();
    expect(next.value).toEqual(select(getUser))
    next = generator.next(userId)
    const url = GET_USERDATA_URL(userId)
    expect(next.value).toEqual(call(fetch, url));
    next = generator.next(badPromise);
    expect(next.value).toEqual(call([badPromise, "json"]));
    next = generator.throw('Error');
    expect(next.value).toEqual(put(action))

  });
})