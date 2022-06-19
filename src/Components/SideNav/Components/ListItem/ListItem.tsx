import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { IconButton } from "Components/IconButton";
import {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-common-types";
import { Link } from "react-router-dom";
import React from "react";
import "./ListItem.scss";

type PropType = {
  href: string;
  icon: IconName;
  title: string;
  isCollapsed: boolean;
  isActive: boolean;
};

const ListItem = ({ href, icon, title, isCollapsed, isActive }: PropType) => {
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
        {<span className="title">{title}</span>}
      </Link>
    </li>
  );
};

export default React.memo(ListItem);
