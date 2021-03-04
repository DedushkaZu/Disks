import initState from './initState'
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore } from 'redux';
// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';


// const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, initState, composeWithDevTools());
// const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, sagaMiddleware)));


export default store;
