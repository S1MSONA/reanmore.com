import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Home, About, Service } from "./Pages";

const NavBar = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <h2>
          <Home />
        </h2>
      ),
    },
    {
      path: "/about",
      element: (
        <h2>
          <About />
        </h2>
      ),
    },
    {
      path: "/service",
      element: (
        <h2>
          <Service />
        </h2>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default NavBar;
