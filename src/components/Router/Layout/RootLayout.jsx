import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";

const RootLayout = () => {
  return (
    <div>
      <Navigation />
      <Footer />
      <Outlet />
    </div>
  );
};

export default RootLayout;
