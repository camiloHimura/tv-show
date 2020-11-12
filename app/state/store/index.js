import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { messagesMiddleware } from "../middleware";

const store = createStore(
  rootReducer,
  applyMiddleware(messagesMiddleware, ReduxThunk)
);

export default store;
