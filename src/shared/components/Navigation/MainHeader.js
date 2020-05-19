import React from "react";

import "./MainHeader.css";

const MainHeader = (props) => {
  return <header className="main-header">{props.childeren}</header>;
};

export default MainHeader;
