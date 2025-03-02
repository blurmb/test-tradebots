import { BotCard } from "@src/features/BotCard";
import classes from "./BotList.module.scss";
import classNames from "classnames";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { getTimeRange } from "@src/features/TimeRangeSelector";
import {
  getBotList,
  getBotListError,
  getBotListIsLoading,
  getBotListStatsForPeriod,
} from "../model/selectors";
import { useEffect } from "react";
import { fetchBotList } from "../model/thunk/fetchBotList";
import {
  getSelectedBot,
  resetSelectedBot,
  setSelectedBot,
} from "@src/features/botSelection";

const stubList = [
  { key: 1, name: "Loading..." },
  { key: 2, name: "Loading..." },
  { key: 3, name: "Loading..." },
  { key: 4, name: "Loading..." },
  { key: 5, name: "Loading..." },
];
const errorStubList = [
  { key: 1, name: "Error" },
  { key: 2, name: "Error" },
  { key: 3, name: "Error" },
  { key: 4, name: "Error" },
  { key: 5, name: "Error" },
];

type BotsListProps = {
  className?: string;
};
export const BotList = ({ className }: BotsListProps) => {
  const dispatch = useAppDispatch();
  const allBots = useAppSelector(getBotList);
  const timeRange = useAppSelector(getTimeRange);
  const selectedBot = useAppSelector(getSelectedBot);
  const bots = useAppSelector((state) =>
    getBotListStatsForPeriod(state, timeRange),
  );
  const isLoading = useAppSelector(getBotListIsLoading);
  const error = useAppSelector(getBotListError);
  const isError = error !== "aborted";
  const isValid = !isLoading && !error && !!bots;
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchBotList({ signal: abortController.signal }));
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <div className={classNames(classes.wrapper, className)}>
      {!isValid &&
        (isError ? errorStubList : stubList).map((bot) => (
          <BotCard
            key={bot.key}
            name={bot.name}
            className={classNames({ [classes.error]: isError })}
          />
        ))}
      {isValid &&
        bots.map((bot) => (
          <BotCard
            key={bot.name}
            selected={selectedBot && bot.name === selectedBot?.name}
            onSelect={() =>
              dispatch(
                selectedBot && bot.name === selectedBot.name
                  ? resetSelectedBot()
                  : setSelectedBot(allBots.find((b) => b.name === bot.name)!),
              )
            }
            name={bot.name}
            profit={bot.profit}
          />
        ))}
    </div>
  );
};
