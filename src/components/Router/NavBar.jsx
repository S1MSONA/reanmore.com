import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Home, About, Service, ErrorPage } from "./Pages";
import RootLayout from "../Router/Layout/RootLayout";
import AboutLayout from "./Layout/AboutLayout";
import UserLayout from "./Layout/UserLayout";
import User, { userLoader } from "./Pages/Users/User";
import UserDetail, { userDetailLoader } from "./Pages/Users/UserDetail";

const NavBar = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />,
  //       },
  //       {
  //         path: "about",
  //         element: <AboutLayout />,
  //         children: [
  //           {
  //             path: "vission",
  //             element: <h4>Vission...</h4>,
  //           },
  //           {
  //             path: "mission",
  //             element: <h4>Mission...</h4>,
  //           },
  //           {
  //             path: "goal",
  //             element: <h4>Goal...</h4>,
  //           },
  //         ],
  //       },
  //       {
  //         path: "/service",
  //         element: <Service />,
  //       },
  //     ],
  //   },
  // ]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route path="vission" element={<h4>Vission...</h4>} />
          <Route path="mission" element={<h4>Mission...</h4>} />
          <Route path="goal" element={<h4>Goal...</h4>} />
        </Route>
        <Route path="service" element={<Service />} />
        <Route path="user" element={<UserLayout />}>
          <Route index element={<User />} loader={userLoader} />
          <Route
            path=":id"
            element={<UserDetail />}
            loader={userDetailLoader}
          />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default NavBar;
