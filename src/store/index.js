import { createStore, applyMiddleware } from "redux";
import createSagaMiddleWare from "redux-saga";
import { fork, all } from "redux-saga/effects";
import {
  watchFetchPosts,
  watchaddPost,
  watchdeletePost
} from "../redux-modules/post/saga";
import { combineReducers, compose } from "redux";
import postReducer from "../redux-modules/post/reducer";

const sagaMiddleWare = createSagaMiddleWare();
const reducer = combineReducers({ postReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleWare))
);
function* rootSaga() {
  try {
    yield all([
      fork(watchFetchPosts),
      fork(watchaddPost),
      fork(watchdeletePost)
    ]);
  } catch (err) {
    console.log("ERROR", err);
  }
}
sagaMiddleWare.run(rootSaga);

export default store;
