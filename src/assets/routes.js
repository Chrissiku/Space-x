/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import Missions from "../components/Missions/Missions";
import Profile from "../components/Profile/profile";
import Rockets from "../components/Rockets/Rockets";

const routes = [
  {
    path: "/",
    name: "Rockets",
    element: <Rockets />,
  },
  {
    path: "/missions",
    name: "Missions",
    element: <Missions />,
  },
  {
    path: "/profile",
    name: "Profile",
    element: <Profile />,
  },
];
export default routes;
