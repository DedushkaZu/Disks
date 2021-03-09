import { PUSH_IN_USERBASKET, TAKE_BASKET_FROM_DB } from '../types/user';

export const basketReducer = (state = [], action) => {
  switch (action.type) {
    case PUSH_IN_USERBASKET:
      return [...state, ...action.payload];
    case TAKE_BASKET_FROM_DB:
      return [...action.payload];
    default:
      return state;
  }
};
