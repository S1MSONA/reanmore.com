import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div>
      <h4>User Page</h4>
      <br />
      <Outlet />
    </div>
  );
};

export default UserLayout;
