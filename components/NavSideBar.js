import React from "react";
import { NAVBAR_LIST } from "../constants";

function NavSideBar({ isOpen, handleToggleSideBar }) {
  const renderListSideBar = () => {
    let xhtml = null;
    xhtml = NAVBAR_LIST.map((listItem) => {
      if (listItem.name === "logo") {
        return null;
      }
      return <li className="list-item">{listItem.name}</li>;
    });
    return xhtml;
  };

  return (
    <div className={`nav-sidebar ${isOpen && "active"}`}>
      <div className="sidebar-left">
        <ul className="list">{renderListSideBar()}</ul>
      </div>
      <div className="sidebar-overlay" onClick={handleToggleSideBar} />
    </div>
  );
}

export default NavSideBar;
