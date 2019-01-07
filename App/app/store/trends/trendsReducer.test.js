import trendsReducer from "./trendsReducer";
import { fetchTrendsBegin, fetchTrendsSuccess, fetchTrendsError } from "./trendsActions";
import { trendsArray } from "./trendsMock";



it('should request trends', () => {
  const expectedOutput = {
    loading: true,
    error: null,
  }
  expect(trendsReducer(null, fetchTrendsBegin())).toEqual(expectedOutput)
});

const reducerInput = trendsArray
it('should save trends to state', () => {
  const expectedOutput = {
    data: trendsArray,
    loading: false,
    error: null,
  }
  expect(trendsReducer(null, fetchTrendsSuccess(trendsArray))).toEqual(expectedOutput)
});

const error = 'something happened'
it('should set error to state', () => {
  const expectedOutput = {
    data: [],
    loading: false,
    error: error,
  }
  expect(trendsReducer(null, fetchTrendsError(error))).toEqual(expectedOutput)
});