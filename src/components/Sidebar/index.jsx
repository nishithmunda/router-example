import React from "react";
import "./style.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="navigation__search">
        <input type="search" placeholder="Search"></input>
      </div>
      <hr />
      <div>
        <a href="/">Home</a>
        <a href="/messages">
          <div>Messages</div>
        </a>
        <a href="/projects">Projects</a>
      </div>
      <hr />
      <div>
        <a href="/notifications">
          <div>Notificatons</div>
        </a>
        <a href="/settings">
          <div>Settings</div>
        </a>
        <div>
          <img></img>
          <span>User 1</span>
        </div>
      </div>
    </aside>
  );
};
