import { getSelectedBot } from "@src/features/botSelection";
import { getTimeRange } from "@src/features/TimeRangeSelector";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import classes from "./BotProfitChart.module.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { getBotProfitChartData } from "../model/selectors";
import { fetchBotProfit } from "../model/thunk/fetchBotProfit";

type BotProfitChartProps = {
  className?: string;
};
export const BotProfitChart = ({ className }: BotProfitChartProps) => {
  const dispatch = useAppDispatch();
  const selectedBot = useAppSelector(getSelectedBot);
  const timeRange = useAppSelector(getTimeRange);
  const data = useAppSelector(getBotProfitChartData);

  useEffect(() => {
    if (timeRange) {
      const abortController = new AbortController();
      dispatch(
        fetchBotProfit({
          botId: selectedBot?.name || undefined,
          timeRange,
          signal: abortController.signal,
        }),
      );
      return () => {
        abortController.abort();
      };
    }
  }, [selectedBot, timeRange]);

  const [currentProfit, setCurrentProfit] = useState<number | undefined>(
    undefined,
  );
  const customTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: { value: number }[];
  }) => {
    useEffect(() => {
      if (active && payload && payload.length) {
        setCurrentProfit(payload[0].value);
      } else {
        setCurrentProfit(undefined);
      }
    }, [active, payload]);
  };
  return (
    <div className={classNames(classes.wrapper, className)}>
      <ResponsiveContainer
        width="100%"
        height="100%"
        minHeight={180}
        className={classes.chart}
      >
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="25%"
                stopColor="var(--color-secondary)"
                stopOpacity={0.8}
              />
              <stop offset="100%" stopColor="transparent" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="time"
            stroke="var(--color-text-secondary)"
            tickSize={0}
            axisLine={false}
            className={classes.xAxis}
            ticks={data.map((el, index) =>
              index === 0 || index === data.length - 1 ? "" : el.time,
            )}
          />
          <YAxis hide />
          <CartesianGrid opacity={0.05} />
          {/*@ts-ignore idk*/}
          <Tooltip content={customTooltip} cursor={false} />
          <Area
            type="monotone"
            dataKey="profit"
            activeDot={{
              stroke: "none",
              fill: "var(--color-accent)",
              r: 4,
            }}
            stroke="var(--color-secondary)"
            fillOpacity={1}
            fill="url(#color)"
          />
        </AreaChart>
      </ResponsiveContainer>
      <div />
      {currentProfit !== undefined && (
        <div
          className={classNames(classes.tooltip, {
            [classes.positive]: currentProfit > 0,
            [classes.negative]: currentProfit < 0,
          })}
        >
          {Math.abs(currentProfit)}
        </div>
      )}
    </div>
  );
};
