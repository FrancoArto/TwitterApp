import { getUser } from "./userSelector";

const state = {
  userReducer: {
    loading: false,
    error: null,
    userId: '687613579',
    userData: {}
  }
}

it('should return user id', () => {
  expect(getUser(state)).toEqual(state.userReducer.userId)
}); 