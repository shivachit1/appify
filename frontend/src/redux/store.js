import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import createRootReducer from "./reducers/index";

// initializing App state for store creation

export default function makeStore() {
  const sagaMiddleware = createSagaMiddleware();

  // combining middleware using Redux saga and redux thunk
  const middlewares = [sagaMiddleware];
  let composeEnhancers = compose;

  // using redux dev tools when the project is in development phase
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  // creating store using all reducers, initial appState and applying middleware
  const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(...middlewares))
  );

  return store;
}
