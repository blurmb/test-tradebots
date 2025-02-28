import "./global.scss";

import classes from "./App.module.scss";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "@src/entities/Router";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <div className={classes.header} />
        <div className={classes.pageWrapper}>
          <AppRoutes />
        </div>
        <div className={classes.footer} />
      </div>
    </BrowserRouter>
  );
};
