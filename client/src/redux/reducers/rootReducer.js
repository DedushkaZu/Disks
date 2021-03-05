import { combineReducers } from "redux";
import loadReducer from './loadReducer'
import errorReducer from "./errorReducer";
import { authReducer } from "./authReducer";

const rootReducer = combineReducers({
  loader: loadReducer,
  error: errorReducer,
  auth: authReducer,
})

export default rootReducer
