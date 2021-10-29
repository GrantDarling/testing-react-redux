import React from "react";
import "./styles.scss";

const Header = (props) => {
  return (
    <header data-test="header">
      <div className="wrap">
        <div data-test="logo">My Logo</div>
      </div>
    </header>
  );
};

export default Header;
