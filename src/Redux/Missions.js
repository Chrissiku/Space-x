const FETCH_MISSION = 'FETCH_MISSIONS';
const JOIN_MISSION = 'JOIN _MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';

const initialState = [];
const BASE_URL = 'https://api.spacexdata.com/v3/missions';

const LoadMissions = (payload) => ({
  type: FETCH_MISSION,
  payload,
});

export const fetchFormApi = async (dispatch) => {
  const response = await fetch(BASE_URL);
  const MissionsRender = await response.json();
  dispatch(
    LoadMissions(
      MissionsRender.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      })),
    ),
  );
};

const MissionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSION:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          joined: true,
        };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          joined: false,
        };
      });
    default:
      return state;
  }
};

export default MissionReducer;
