import React from "react";
import { SidebarItems } from "./SidebarItems";
import "./style.css";
import { listItem, listItemfooter } from "./itemList";

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
        <div className="siderbar__routes">
          <hr />
          <SidebarItems routes={listItemfooter} />
        </div>
      </div>
    </aside>
  );
};
