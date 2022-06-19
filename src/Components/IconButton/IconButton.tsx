import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconDefinition,
  IconName,
} from "@fortawesome/fontawesome-common-types";
import "./IconButton.scss";

type PropType = {
  icon: IconDefinition;
  isActive: boolean;
  onClick: () => void;
  size: "small" | "large";
};

const IconButton = ({
  icon,
  isActive = false,
  onClick,
  size = "large",
  ...args
}: PropType) => {
  return (
    <button
      onClick={onClick}
      id="icon-wrapper"
      data-size={size}
      data-isactive={isActive}
      {...args}
    >
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default React.memo(IconButton);
