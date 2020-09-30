import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";

import DeviceUsageMenu from "./DeviceUsageMenu";
import { FETCH_SUBCOLLECTION } from "../../../firebase/firebaseData";

const DeviceUsageCell = (props) => {
  const [anchorE1, setAnchorE1] = useState(undefined);

  const onOptionMenuSelect = (event) => {
    setAnchorE1(event.currentTarget);
    // setMenuState(true);
  };
  const handleRequestClose = () => {
    // setMenuState(true);
    setAnchorE1(null);
  };

  const {
    userLastName,
    deviceUsageStat,
    appPlatform,
    userId,
    profileImg,
    deviceName,
    banditLevel,
    userFirstName,
  } = props.data;

  // const [selectedSubCol] = FETCH_SUBCOLLECTION('workoutHistory', userId,)
  //const userWorkout = FETCH_USER_CURRENT_WORKOUT_HISTORY(userId);

  const statusStyle = deviceUsageStat.includes("High Usage")
    ? "text-white bg-success"
    : deviceUsageStat.includes("Medium Usage")
    ? "bg-amber"
    : deviceUsageStat.includes("Low Usage")
    ? "text-white bg-danger"
    : "text-white bg-grey";

  const banditLevelStyle = banditLevel.includes("Level 4 - Bandit")
    ? "text-white bg-success"
    : banditLevel.includes("Level 3 - Racoon")
    ? "bg-amber"
    : banditLevel.includes("Level 2 - Rogue")
    ? "text-white bg-danger"
    : "text-white bg-grey";

  return (
    <tr tabIndex={-1} key={userId}>
      <td>{userId}</td>
      <td>
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={userFirstName}
            src={profileImg}
            className="user-avatar"
          />
          <div className="user-detail">
            <h5 className="user-name">{userFirstName}</h5>
            <h5 className="user-name">{userLastName}</h5>
          </div>
        </div>
      </td>
      {/* <td>{userWorkout.id}</td> */}
      {/* <td>{workoutDates}</td> */}
      {/* <td>{popularWorkout}</td> */}
      <td>{deviceName}</td>
      <td>{appPlatform}</td>
      <td className="status-cell text-right">
        <div className={` badge text-uppercase ${statusStyle}`}>
          {deviceUsageStat}
        </div>
      </td>
      <td className="status-cell text-right">
        <div className={` badge text-uppercase ${banditLevelStyle}`}>
          {banditLevel}
        </div>
      </td>
      <td className="text-right">
        <IconButton onClick={onOptionMenuSelect}>
          <i className="zmdi zmdi-more-vert" />
        </IconButton>
        <DeviceUsageMenu
          //   menuState={menuState}
          anchorEl={anchorE1}
          handleRequestClose={handleRequestClose}
        />
      </td>
    </tr>
  );
};

export default DeviceUsageCell;
