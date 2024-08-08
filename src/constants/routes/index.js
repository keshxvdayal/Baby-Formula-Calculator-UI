import AboutPage from "../../components/Aboutus.tsx";
import HomePage from "../../components/Home.tsx";
import Testimonials from "../../components/Testimonials.tsx";
import History from "../../components/History.tsx";


export const ROUTE_HOME = "/";
export const ROUTE_ABOUT = "/about";
export const ROUTE_TESTIMONIALSL = "/testimonials";
export const ROUTE_HISTORY = "/history";
export const ROUTE_ANY = "*";

export const APP_ROUTES = [
  {
    id: 1,
    path: ROUTE_HOME,
    element: HomePage,
  },
  {
    id: 2,
    path: ROUTE_TESTIMONIALSL,
    element: Testimonials,
  },
  {
    id: 3,
    path: ROUTE_ABOUT,
    element: AboutPage,
  },
  {
    id: 4,
    path: ROUTE_HISTORY,
    element: History,
  }
];