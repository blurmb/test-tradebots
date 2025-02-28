import { Route, Routes } from "react-router";
import { RoutePath, RoutePaths } from "../../model/paths";
import { ReactNode } from "react";
import { DashboardPage } from "@src/pages/DashboardPage";

const routeToComponent: Record<RoutePath, ReactNode> = {
  [RoutePaths.Dashboard]: <DashboardPage />,
  [RoutePaths.Megabot]: <div>Megabot</div>,
  [RoutePaths.Market]: <div>Market</div>,
  [RoutePaths.Prices]: <div>Prices</div>,
  [RoutePaths.Profile]: <div>Profile</div>,
};
export const AppRoutes = () => {
  return (
    <Routes>
      {Object.values(RoutePaths).map((path) => (
        <Route key={path} path={path} element={routeToComponent[path]} />
      ))}
    </Routes>
  );
};
