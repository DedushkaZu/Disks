import { combineReducers } from "redux";
import loadReducer from './loadReducer'
import errorReducer from "./errorReducer";
import { authReducer } from "./authReducer";
import { carsReducer } from './carsReducer';
import { basketReducer } from './basketReducer';
import { statusReducer } from './statusReducer';

const rootReducer = combineReducers({
  loader: loadReducer,
  error: errorReducer,
  auth: authReducer,
  cars: carsReducer,
  basket: basketReducer,
  config: statusReducer,
})

export default rootReducer
