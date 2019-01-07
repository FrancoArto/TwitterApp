import { fetchUserDataRequest, fetchUserDataSuccess, fetchUserDataFailure } from "./userActions";
import  userMock  from "./userMock";
import userReducer from "./userReducer";

const userId = '8105922'

it('should request user data', () => {
  const expectedOutput = {
    loading: true,
    error: null,
    userId: userId,
  }
  expect(userReducer(null, fetchUserDataRequest(userId))).toEqual(expectedOutput)
});

const reducerInput = userMock
it('should save user data to state', () => {
  const expectedOutput = {
    loading: false,
    error: null,
    userData: reducerInput
  }
  expect(userReducer(null, fetchUserDataSuccess(reducerInput))).toEqual(expectedOutput)
});

const error = 'something happened'
it('should set error to state', () => {
  const expectedOutput = {
    loading: false,
    error: error,
    userData: {},
    userId: null
  }
  expect(userReducer(null, fetchUserDataFailure(error))).toEqual(expectedOutput)
});