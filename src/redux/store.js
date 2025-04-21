import {applyMiddleware, createStore} from "redux";
import combineReducers from "./combineReducers";
import {thunk} from "redux-thunk";

const store = createStore(
    combineReducers,
    applyMiddleware(thunk)
)

export default store
