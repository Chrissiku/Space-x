/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */

import { useSelector } from "react-redux/es/exports";

const ProfilesData = () => {
  const profileParts = useSelector((state) => [
    {
      title: "My Rockets",
      data: state.rockets.filter((rocket) => rocket.reserved),
    },
  ]);
};

export default ProfilesData;
