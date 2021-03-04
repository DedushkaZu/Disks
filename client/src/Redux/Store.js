import { applyMiddleware, createStore } from 'redux';
import initState from './InitState';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// const store = createStore(rootReducer, initState(), composeWithDevTools(applyMiddleware(thunk)));

// export default store;
