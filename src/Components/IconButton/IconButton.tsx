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
};

const IconButton = ({ icon, isActive = false, onClick }: PropType) => {
  return (
    <button onClick={onClick} className="icon-wrapper" data-isActive={isActive}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default React.memo(IconButton);
