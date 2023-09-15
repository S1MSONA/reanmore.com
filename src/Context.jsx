import { createContext, useState, useContext } from "react";
const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);
const Context = ({ children }) => {
  const [user, setUser] = useState({ name: "Sona" });
  function signout() {
    setUser(null);
  }
  return (
    <GlobalContext.Provider value={{ user, signout }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default Context;
