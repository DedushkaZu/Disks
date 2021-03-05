import { CHECK_AUTH } from '../types/user';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHECK_AUTH:
      const newState = action.payload
      return newState
    default:
      return state;
  }
};
