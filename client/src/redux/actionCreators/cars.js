import { GET_ALL_CARS } from '../types/cars'

const getAllCars = () => {
  return {
    type: GET_ALL_CARS,
  }
}

export {
  getAllCars
}
