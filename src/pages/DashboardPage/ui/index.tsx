import { TradingCapital } from "@src/features/TradingCapital/ui";
import classes from "./DashboardPage.module.scss";
import { TimeRangeSelector } from "@src/features/TimeRangeSelector/ui";

export const DashboardPage = () => {
  return (
    <div className={classes.wrapper}>
      <TradingCapital />
      <div className={classes.chart}>chart</div>
      <div className={classes.bots}>bots</div>
      <TimeRangeSelector />
    </div>
  );
};
