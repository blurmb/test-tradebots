import "./global.scss";

import classes from "./App.module.scss";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "@src/entities/Router";
import { PageFooter } from "@src/features/PageFooter";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <div className={classes.header} />
        <div className={classes.pageWrapper}>
          <AppRoutes />
        </div>
        <PageFooter className={classes.footer} />
      </div>
    </BrowserRouter>
  );
};
