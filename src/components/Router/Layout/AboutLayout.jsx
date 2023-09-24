import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

const AboutLayout = () => {
  return (
    <div>
      <h4>About Page</h4>
      <div className="nav-link">
        <NavLink to="vission">Vission</NavLink>
        <NavLink to="mission">Mission</NavLink>
        <NavLink to="goal">Goal</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutLayout;
