import { createBrowserRouter } from "react-router-dom"

import Login from "../pages/Auth/login"
import Register from "../pages/Auth/register"
import Home from "../pages/Home"
import Root from "../routes/root"
import Auth from "./auth"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
    ],
  },
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
])
