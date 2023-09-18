import React from "react";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

const NavBar = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <h2>Home Page</h2>,
    },
    {
      path: "/about",
      element: <h2>About Page</h2>,
    },
    {
      path: "/service",
      element: <h2>Service Page</h2>,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default NavBar;
