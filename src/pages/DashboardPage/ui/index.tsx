import classes from "./DashboardPage.module.scss";
import { TimeRangeSelector } from "@src/features/TimeRangeSelector/ui";

export const DashboardPage = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.balance}>balance</div>
      <div className={classes.chart}>chart</div>
      <div className={classes.bots}>bots</div>
      <TimeRangeSelector />
    </div>
  );
};
