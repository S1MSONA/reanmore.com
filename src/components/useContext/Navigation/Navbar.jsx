import { useState, createContext } from "react";
import NavLink from "./NavLink";
import logo from "../../../assets/img/logo-color.webp";

export const navBarContext = createContext();
const Navbar = () => {
  const [user, setUser] = useState({ name: "Sona" });
  function signout() {
    setUser(null);
  }
  return (
    <navBarContext.Provider value={{ user, signout }}>
      <nav className="navigation container-width">
        <img src={logo} alt="reanmore logo" />
        <NavLink user={user} signout={signout} />
      </nav>
    </navBarContext.Provider>
  );
};

export default Navbar;
