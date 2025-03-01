import { Chip } from "@src/shared/ui";
import classes from "./DashboardPage.module.scss";
import { useState } from "react";

export const DashboardPage = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  return (
    <div className={classes.wrapper}>
      <div className={classes.balance}>balance</div>
      <div className={classes.chart}>chart</div>
      <div className={classes.bots}>bots</div>
      <div className={classes.settings}>
        <span className={classes.lable}>Time Range:</span>
        <div className={classes.chips}>
          <Chip isActive={activeIndex === 0} onClick={() => setActiveIndex(0)}>
            24h
          </Chip>
          <Chip isActive={activeIndex === 1} onClick={() => setActiveIndex(1)}>
            7 days
          </Chip>
          <Chip isActive={activeIndex === 2} onClick={() => setActiveIndex(2)}>
            30 days
          </Chip>
          <Chip isActive={activeIndex === 3} onClick={() => setActiveIndex(3)}>
            All time
          </Chip>
        </div>
      </div>
    </div>
  );
};
