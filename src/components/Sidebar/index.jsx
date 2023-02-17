import React from "react";
import { SidebarItems } from "./SidebarItems";
import "./style.css";
import { listItem } from "./itemList";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="navigation__search">
        <input type="search" placeholder="Search"></input>
      </div>

      <div className="siderbar__routes">
        <hr />
        <SidebarItems routes={listItem} />
      </div>

      <div className="siderbar__footer">
        <hr />
        <SidebarItems
          routes={[
            {
              name: "Notifications",
              route: "/notifications",
            },
            {
              name: "Settings",
              route: "/settings",
            },
          ]}
        />
        <div>
          <img></img>
          <span>User 1</span>
        </div>
      </div>
    </aside>
  );
};
