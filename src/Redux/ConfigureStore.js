/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RocketsReducer from "./rockets";

const reducer = combineReducers({
  rockets: RocketsReducer.reducer,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
