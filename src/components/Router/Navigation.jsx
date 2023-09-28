import React from "react";
import logo from "../../assets/img/logo-color.webp";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="navigation">
      <img src={logo} alt="reanmore logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="service">Sevice</Link>
        </li>
        <li>
          <Link to="user">User</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
