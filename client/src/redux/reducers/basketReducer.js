import { PUSH_IN_USERBASKET } from '../types/user';

export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH_IN_USERBASKET:
      return [...state, ...action.payload]
    default:
      return state;
  }
};
