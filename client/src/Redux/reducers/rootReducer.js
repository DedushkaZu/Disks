import { combineReducers } from "redux";
import loadReducer from './loadReducer'
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  loader: loadReducer,
  error: errorReducer,
})

export default rootReducer
