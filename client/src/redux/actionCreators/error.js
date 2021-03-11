import { ERROR, WRONG_AUTH_DATA } from '../types/error'

const errorHandler = (errorStatus, errorMessage) => {
  return {
    type: ERROR,
    data: {
      errorStatus,
      errorMessage
    }
  }
}

const writeWrongData = (flag) => {
  return {
    type: WRONG_AUTH_DATA,
    payload: flag,
  }
};

export {
  errorHandler,
  writeWrongData
}
