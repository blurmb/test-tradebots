import { Chip } from "@src/shared/ui";
import classes from "./TimeRangeSelector.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { getTimeRange } from "../model/selectors";
import { setTimeRange, TimeRangeToLabel } from "../model/slice";
import { TimeRanges } from "../model/slice";

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
