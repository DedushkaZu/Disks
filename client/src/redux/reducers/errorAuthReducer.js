import { WRONG_AUTH_DATA } from '../types/error';

const errorAuthReducer = (error = false, action) => {
  switch (action.type) {
    case WRONG_AUTH_DATA:
      return !error
    default:
      return error
  }
}

export default errorAuthReducer;
