import "./global.scss";

import classes from "./App.module.scss";
import { BrowserRouter } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <div className={classes.app}>
        <div className={classes.header} />
        <div className={classes.pageWrapper}>
          <div>PAGE</div>
        </div>
        <div className={classes.footer} />
      </div>
    </BrowserRouter>
  );
};
