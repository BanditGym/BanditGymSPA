import React from "react";
import CustomScrollbars from "util/CustomScrollbars";
import Navigation from "../../components/Navigation";

const SideBarContent = () => {
  const navigationMenus = [
    {
      name: "pages.banditgym",
      type: "section",
      children: [
        {
          name: "pages.banditgym.homepage",
          icon: "home",
          type: "item",
          link: "/app/bandit-gym/Home",
        },
        {
          name: "pages.banditgym.shoppage",
          icon: "store",
          type: "item",
          link: "/app/bandit-gym/Shop",
        },
        {
          name: "pages.banditgym.userProfile",
          icon: "account",
          type: "item",
          link: "/app/bandit-gym/MyProfile",
        },
        {
          name: "pages.banditgym.communityPage",
          icon: "accounts-alt",
          type: "item",
          link: "/app/bandit-gym/BanditCommunity",
        },
        {
          name: "pages.banditgym.supportpage",
          icon: "pin-help",
          type: "item",
          link: "/app/bandit-gym/Support",
        },
        {
          name: "pages.banditgym.aboutuspage",
          icon: "book",
          type: "item",
          link: "/app/bandit-gym/AboutUs",
        },
      ],
    },
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
