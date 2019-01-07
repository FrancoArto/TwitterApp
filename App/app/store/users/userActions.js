export const FETCH_USERDATA_REQUEST = 'FETCH_USERDATA_REQUEST'
export const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS'
export const FETCH_USERDATA_FAILURE = 'FETCH_USERDATA_FAILURE'

export const fetchUserDataRequest = (userId) => ({
    type: FETCH_USERDATA_REQUEST,
    payload: userId
})

export const fetchUserDataSuccess = (data) => ({
    type: FETCH_USERDATA_SUCCESS,
    payload: data
})

export const fetchUserDataFailure = (error) => ({
    type: FETCH_USERDATA_FAILURE,
    payload: error
})

