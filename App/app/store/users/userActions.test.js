import { FETCH_USERDATA_REQUEST, 
  FETCH_USERDATA_SUCCESS, 
  FETCH_USERDATA_FAILURE, 
  fetchUserDataFailure, 
  fetchUserDataRequest, 
  fetchUserDataSuccess } from "./userActions";
import  userMock  from "./userMock";


const inputObject =  userMock
const error = 'Something happened'
const userId = '8105922'

it('action should request user data', () => {
  const actionOutput = {
    type: FETCH_USERDATA_REQUEST,
    payload: userId
  }
  expect(fetchUserDataRequest(userId)).toEqual(actionOutput)
});

it('action should return an object with user data', () => {
  const actionOutput = {
    type: FETCH_USERDATA_SUCCESS,
    payload: inputObject
  }
  expect(fetchUserDataSuccess(inputObject)).toEqual(actionOutput)
});

it('action should return an object with an error payload', () => {
  const actionOutput = {
    type: FETCH_USERDATA_FAILURE,
    payload: error
  }
  expect(fetchUserDataFailure(error)).toEqual(actionOutput)
});