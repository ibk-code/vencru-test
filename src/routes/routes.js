// -------------- import external dependencies ------------
import { lazy } from "react";

// -------------- import internal dependencies --------------
const Settings = lazy(() => import("../screens/app/settings"));

// ------ merchant routes --------
export const routes = [
  {
    path: "/settings",
    component: Settings,
    title: "Product settings",
  },
];
