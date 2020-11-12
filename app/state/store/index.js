import ReduxThunk from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
