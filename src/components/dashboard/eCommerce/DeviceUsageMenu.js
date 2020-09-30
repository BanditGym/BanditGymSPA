import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IntlMessages from "util/IntlMessages";

const DeviceUsageMenu = (props) => {
  const options = [
    <IntlMessages id="adminDashboard.deviceMetrics.menuPopup.userData" />,
    <IntlMessages id="adminDashboard.deviceMetrics.menuPopup.detailedLog" />,
    <IntlMessages id="adminDashboard.deviceMetrics.menuPopup.clearData" />,
    <IntlMessages id="adminDashboard.deviceMetrics.menuPopup.userProfile" />,
  ];
  const { menuState, anchorEl, handleRequestClose } = props;
  return (
    <Menu
      id="long-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleRequestClose}
      MenuListProps={{
        style: {
          width: 150,
          paddingTop: 0,
          paddingBottom: 0,
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option} onClick={handleRequestClose}>
          {option}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default DeviceUsageMenu;
