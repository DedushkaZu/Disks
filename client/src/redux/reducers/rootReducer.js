import { combineReducers } from "redux";
import loadReducer from './loadReducer'
import errorReducer from "./errorReducer";
import { authReducer } from "./authReducer";
import { carsReducer } from './carsReducer';
import { basketReducer } from './basketReducer';
import { statusReducer } from './statusReducer';
import errorAuthReducer from "./errorAuthReducer";

const rootReducer = combineReducers({
  loader: loadReducer,
  error: errorReducer,
  auth: authReducer,
  cars: carsReducer,
  basket: basketReducer,
  config: statusReducer,
  wrongAuthData: errorAuthReducer,
})

export default rootReducer
