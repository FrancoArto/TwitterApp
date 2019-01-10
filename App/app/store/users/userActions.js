export const FETCH_USERDATA_REQUEST = 'FETCH_USERDATA_REQUEST'
export const FETCH_USERDATA_SUCCESS = 'FETCH_USERDATA_SUCCESS'
export const FETCH_USERDATA_FAILURE = 'FETCH_USERDATA_FAILURE'
export const UPLOAD_PROFILE_PICTURE_REQUEST = 'UPLOAD_PROFILE_PICTURE_REQUEST'
export const UPLOAD_PROFILE_PICTURE_SUCCESS = 'UPLOAD_PROFILE_PICTURE_SUCCESS'
export const UPLOAD_PROFILE_PICTURE_FAILURE = 'UPLOAD_PROFILE_PICTURE_FAILURE'

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

export const uploadProfilePictureRequest = (image) => ({
    type: UPLOAD_PROFILE_PICTURE_REQUEST,
    payload: image
})

export const uploadProfilePictureSuccess = (newUserObject) => ({
    type: UPLOAD_PROFILE_PICTURE_SUCCESS,
    payload: newUserObject
})

export const uploadProfilePictureFailure = (error) => ({
    type: UPLOAD_PROFILE_PICTURE_FAILURE,
    payload: error
})