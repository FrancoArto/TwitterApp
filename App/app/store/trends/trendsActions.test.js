import { FETCH_TRENDS_BEGIN, 
  fetchTrendsBegin, 
  FETCH_TRENDS_SUCCESS, 
  fetchTrendsSuccess, 
  fetchTrendsError, 
  FETCH_TRENDS_FAILURE } from "./trendsActions";
import { trendsArray } from "./trendsMock";


const inputArray = trendsArray
const error = 'Something happened'

it('action should request trends', () => {
  const actionOutput = {
    type: FETCH_TRENDS_BEGIN
  }
  expect(fetchTrendsBegin()).toEqual(actionOutput)
});

it('action should return an array of trends', () => {
  const actionOutput = {
    type: FETCH_TRENDS_SUCCESS,
    payload: inputArray
  }
  expect(fetchTrendsSuccess(inputArray)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_TRENDS_FAILURE,
    payload: error
  }
  expect(fetchTrendsError(error)).toEqual(actionOutput)
});