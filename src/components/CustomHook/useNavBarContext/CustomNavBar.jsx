import NavLink from "./CustomNavLink";
import logo from "../../../assets/img/logo-color.webp";

const CustomNavbar = () => {
  return (
    <nav className="navigation container-width">
      <img src={logo} alt="reanmore logo" />
      <NavLink />
    </nav>
  );
};

export default CustomNavbar;
