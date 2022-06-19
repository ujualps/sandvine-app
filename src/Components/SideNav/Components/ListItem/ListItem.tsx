import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconButton } from "Components/IconButton";
import {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-common-types";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { SideNavContext } from "context/SideNavContext";
import "./ListItem.scss";

type PropType = {
  href: string;
  icon: IconName;
  title: string;
  isCollapsed: boolean;
  isActive: boolean;
  id: number;
  desc: string;
};

const ListItem = ({
  href,
  icon,
  title,
  isCollapsed,
  isActive,
  id,
  desc,
}: PropType) => {
  const { setActiveInfo, activeInfo } = useContext(SideNavContext);
  return (
    <li
      className="list-item"
      data-iscollapsed={isCollapsed}
      data-isactive={isActive}
    >
      <Link to={href} data-isactive={isActive} data-iscollapsed={isCollapsed}>
        <div>
          <IconButton isActive={isActive} icon={icon} />
        </div>
        <span className="title">{title}</span>

        <div className="info-icon title">
          <IconButton
            onMouseEnter={() => setActiveInfo(id)}
            size={"small"}
            icon={solid("info-circle")}
          />
        </div>
      </Link>
      {activeInfo == id && desc && <div className="description">{desc}</div>}
    </li>
  );
};

export default React.memo(ListItem);
