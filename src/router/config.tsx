import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Success from "../pages/success/page";
import Testimonials from "../pages/testimonials/page";
import ReviewSuccess from "../pages/review-success/page";
import Destinations from "../pages/destinations/page";
import EveryoneWelcome from "../pages/Everyone-welcome/page";

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
    path: "/review-success",
    element: <ReviewSuccess />,
  },
  {
    path: "/destinations",
    element: <Destinations />,
  },
  {
    path: "/everyone-welcome",
    element: <EveryoneWelcome />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
