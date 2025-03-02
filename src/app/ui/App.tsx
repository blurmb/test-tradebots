import "./global.scss";

import classes from "./App.module.scss";
import { BrowserRouter } from "react-router";
import { AppRoutes } from "@src/entities/Router";
import { PageFooter } from "@src/features/PageFooter";
import { PageHeader } from "@src/widgets/PageHeader";
import { PortalProvider } from "../providers/PortalProvider";

export const App = () => {
  return (
    <PortalProvider>
      <BrowserRouter basename={PUBLIC_URL || ""}>
        <div className={classes.app}>
          <PageHeader className={classes.header} />
          <div className={classes.pageWrapper}>
            <AppRoutes />
          </div>
          <PageFooter className={classes.footer} />
        </div>
      </BrowserRouter>
    </PortalProvider>
  );
};
