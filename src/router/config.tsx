import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Success from "../pages/success/page";
import Testimonials from "../pages/testimonials/page.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/testimonials",
    element: <Testimonials />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
