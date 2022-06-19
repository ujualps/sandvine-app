import React from "react";
import { APP_NAME, APP_DESC } from "../../interface/translate.const";
import { sandvineLogo } from "../../assets/images";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-wrapper-logo">
        <img src={sandvineLogo} />
        <div className="header-wrapper-logo-title">
          <span>{APP_NAME.toUpperCase()}</span>
          <span>{APP_DESC}</span>
        </div>
      </div>
    </header>
  );
};

export default React.memo(Header);
