import React from "react";

const Layout = ({ children, className = "" }) => {
  return <div className={`bg-light z-0 w-full h-full inline-block p-32 ${className}`}>{children}</div>;
};

export default Layout;
