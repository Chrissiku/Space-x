/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import Rockets from "../components/Rockets/Rockets";

const FETCH_ROCKETS = "FETCH_ROCKETS";
const RESERVE_ROCKETS = "RESERVE_ROCKETS";
const CANCEL_RESERVATION = "CANCEL_RESERVATION";
const initialState = [];

const RocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return action.payload;
    case RESERVE_ROCKETS:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: true,
        };
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: false,
        };
      });
    default:
      return state;
  }
};

export default RocketsReducer;
