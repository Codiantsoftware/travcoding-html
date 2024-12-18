import React from "react";
import { Outlet } from "react-router-dom";

function FrontendPublicLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default FrontendPublicLayout;
