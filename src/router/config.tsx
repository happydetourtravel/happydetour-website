import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Success from "../pages/success/page";

const routes: RouteObject[] = [
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
