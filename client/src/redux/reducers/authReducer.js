import { CHECK_AUTH } from '../types/user';

export const authReducer = (state = false, action) => {
  switch (action.type) {
    case CHECK_AUTH:
      return action.payload
    default:
      return state;
  }
};
