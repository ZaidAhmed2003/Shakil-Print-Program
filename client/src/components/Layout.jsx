import React from "react";
import Sidenav from "./Sidenav";
import Topnav from "./Topnav";
import Container from "./Container";

const Layout = ({ title, children }) => {
  return (
    <div className="flex h-screen">
      <div className="h-full">
        <Sidenav />
      </div>
      <div className="flex flex-1 flex-col">
        <div className="border-b-[1px]">
          <Topnav title={title} />
        </div>
        <div className="flex-1 overflow-auto">
          <Container>{children}</Container>
        </div>
      </div>
    </div>
  );
};

export default Layout;
