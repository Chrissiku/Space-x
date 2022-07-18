/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RocketsReducer from "./rockets";
import MissionReducer from "./Missions";

const reducer = combineReducers({
  rockets: RocketsReducer,
  mission: MissionReducer,
});
const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;
