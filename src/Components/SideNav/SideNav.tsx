import React, { useState, useCallback, useEffect } from "react";
import { useCurrentNavTab } from "hooks/useCurrentNavTab";
import { IconButton } from "Components/IconButton";
import "./SideNav.scss";
import { sideNavIcons } from "./utils";
import { navigation } from "config/navigation";
import { APP_NAME } from "interface/translate.const";
import { ListItem } from "./Components/ListItem";

//https://dribbble.com/shots/16252715-Sidebar-navigation
const SideNav = () => {
  const [isCollapsed, setCollapsed] = useState(true);
  // const [activeTab, setActiveTab] = useState(null);

  const activeTab = useCurrentNavTab();
  // console.log(activeTab);

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
        {<span className="title">{APP_NAME}</span>}
      </div>
      <ul>
        {navigation.map((item) => (
          <ListItem
            id={item.key}
            isActive={item.key === activeTab?.key}
            key={item.key}
            href={item.href}
            isCollapsed={isCollapsed}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </ul>
    </aside>
  );
};

export default React.memo(SideNav);
