import { TradingCapital } from "@src/features/TradingCapital/ui";
import classes from "./DashboardPage.module.scss";
import { TimeRangeSelector } from "@src/features/TimeRangeSelector/ui";
import { BotList } from "@src/widgets/BotList/";
import { BotProfitChart } from "@src/widgets/BotProfitChart/";

export const DashboardPage = () => {
  return (
    <div className={classes.wrapper}>
      <TradingCapital />
      <BotProfitChart className={classes.chart} />
      <BotList />
      <TimeRangeSelector />
    </div>
  );
};
