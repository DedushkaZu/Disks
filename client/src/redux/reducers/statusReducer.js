import { CONFIG_STATUS } from '../types/status';

export const statusReducer = (state = false, action) => {
  switch (action.type) {
    case CONFIG_STATUS:
      return !state
    default:
      return state;
  }
};
