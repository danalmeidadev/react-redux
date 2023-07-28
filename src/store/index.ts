import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import {rootReducer} from "./rootReducers";
import rootSaga from "./rootSagas";
import { routerMiddleware } from "connected-react-router";
import { createBrowserHistory } from 'history';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
let store: any;

export function configureStore(initialState: {}) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const localstore = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
  sagaMiddleware.run(rootSaga);
  store = localstore;
  return localstore;
}

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
