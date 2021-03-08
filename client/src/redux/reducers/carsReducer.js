import { GET_ALL_CARS } from '../types/cars';

export const carsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_CARS:
      return state;
    default:
      return state;
  }
};
