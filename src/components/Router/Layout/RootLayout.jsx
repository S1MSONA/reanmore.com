import { Outlet } from "react-router-dom";
import Navigation from "../Navigation";
import Footer from "../Footer";
import Scroll from "../../../Scroll";

const RootLayout = () => {
  return (
    <div>
      <Scroll />
      <Navigation />
      {/* <Footer /> */}
      <Outlet />
    </div>
  );
};

export default RootLayout;
