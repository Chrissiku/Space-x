/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { type } from "@testing-library/user-event/dist/type";

const FETCH_ROCKETS = "FETCH_ROCKETS";
const RESERVE_ROCKETS = "RESERVE_ROCKETS";
const CANCEL_RESERVATION = "CANCEL_RESERVATION";
const initialState = [];
const API_URL = "https://api.spacexdata.com/v3/rockets";

const LoadAllRockets = (payload) => ({
  type: FETCH_ROCKETS,
  payload,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

export const CancelReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

export const fetchFormApi = async (dispatch) => {
  const response = await fetch(API_URL);
  const RocketsRender = await response.json();

  dispatch(
    LoadAllRockets(
      RocketsRender.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        type: rocket.rocket_type,
        description: rocket.description,
        images: rocket.flickr_images,
      }))
    )
  );
};

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
