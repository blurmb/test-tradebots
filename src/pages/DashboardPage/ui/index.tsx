import { TradingCapital } from "@src/features/TradingCapital/ui";
import classes from "./DashboardPage.module.scss";
import { TimeRangeSelector } from "@src/features/TimeRangeSelector/ui";
import { BotList } from "@src/widgets/BotList/";

export const DashboardPage = () => {
  return (
    <div className={classes.wrapper}>
      <TradingCapital />
      <div className={classes.chart}>chart</div>
      <BotList />
      <TimeRangeSelector />
    </div>
  );
};
