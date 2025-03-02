import { Chip } from "@src/shared/ui";
import classes from "./TimeRangeSelector.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { getTimeRange } from "../model/selectors";
import { setTimeRange, TimeRange } from "../model/slice";
import { TimeRanges } from "../model/slice";

const TimeRangeToLabel: { [key in TimeRange]: string } = {
  "24h": "24h",
  "7d": "7 days",
  "30d": "30 days",
  all: "All time",
};

type TimeRangeSelectorProps = {
  className?: string;
};
export const TimeRangeSelector = ({ className }: TimeRangeSelectorProps) => {
  const dispatch = useAppDispatch();
  const timeRange = useAppSelector(getTimeRange);
  return (
    <div className={classNames(classes.wrapper, className)}>
      <span className={classes.lable}>Time Range:</span>
      <div className={classes.chips}>
        {TimeRanges.map((range) => (
          <Chip
            key={range}
            isActive={range === timeRange}
            onClick={() => {
              dispatch(setTimeRange(range));
            }}
          >
            {TimeRangeToLabel[range]}
          </Chip>
        ))}
      </div>
    </div>
  );
};
