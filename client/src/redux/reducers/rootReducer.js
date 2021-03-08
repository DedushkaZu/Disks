import { combineReducers } from "redux";
import loadReducer from './loadReducer'
import errorReducer from "./errorReducer";
import { authReducer } from "./authReducer";
import { carsReducer } from './carsReducer';

const rootReducer = combineReducers({
  loader: loadReducer,
  error: errorReducer,
  auth: authReducer,
  cars: carsReducer,
})

export default rootReducer
