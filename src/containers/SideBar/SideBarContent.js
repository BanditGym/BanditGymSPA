import React from "react";
import CustomScrollbars from "util/CustomScrollbars";
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: "pages.adminDashboard",
      type: "section",
      children: [
        {
          name: "pages.adminDashboard.productMetrics",
          icon: "view-dashboard",
          type: "item",
          link: "/app/admin-dashboard/ProductMetrics",
        },
      ],
    },
  ];

  return (
    <CustomScrollbars className=" scrollbar">
      <Navigation menuItems={navigationMenus} />
    </CustomScrollbars>
  );
};

export default SideBarContent;
