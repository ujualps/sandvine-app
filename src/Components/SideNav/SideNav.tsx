import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconButton } from "Components/IconButton";
import "./SideNav.scss";
import {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-common-types";
import { sideNavIcons } from "./utils";
import { APP_NAME } from "interface/translate.const";

//https://dribbble.com/shots/16252715-Sidebar-navigation
const SideNav = () => {
  const [isCollapsed, setCollapsed] = useState(true);

  const toggleCollapsed = useCallback(() => {
    setCollapsed((state) => !state);
  }, []);

  return (
    <aside className="side-nav-wrapper" data-isCollapsed={isCollapsed}>
      <div className="side-nav-wrapper-clps-btn">
        <IconButton
          icon={isCollapsed ? sideNavIcons.arrowRight : sideNavIcons.arrowLeft}
          onClick={toggleCollapsed}
        />
        { <span className="title">{APP_NAME}</span>}
      </div>
      <ul>
        <li>
          <a onClick={() => console.log("clicked")}>
            {/* <FontAwesomeIcon icon={solid('house')} /> */}
            {/* <p>Dashboard</p> */}
            {/* {isCollapsed?'true':'false'} */}
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default React.memo(SideNav);
