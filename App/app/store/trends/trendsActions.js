export const FETCH_TRENDS_BEGIN = 'FETCH_TRENDS_BEGIN'
export const FETCH_TRENDS_SUCCESS = 'FETCH_TRENDS_SUCCESS'
export const FETCH_TRENDS_FAILURE = 'FETCH_TRENDS_FAILURE'

export const fetchTrendsBegin = () => ({
    type: FETCH_TRENDS_BEGIN
  });

export const fetchTrendsSuccess = (trendsArray) => ({
    type: FETCH_TRENDS_SUCCESS,
    payload: trendsArray
});

export const fetchTrendsError = error => ({
    type: FETCH_TRENDS_FAILURE,
    payload: error
  });