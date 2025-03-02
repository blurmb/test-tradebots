import classNames from "classnames";
import classes from "./TradingCapital.module.scss";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import {
  getTradingCapital,
  getTradingCapitalError,
  getTradingCapitalIsLoading,
} from "../model/selectors";
import { fetchTradingCapital } from "../model/thunk/fetchTradingCapital";
import { useEffect } from "react";
import { Icon } from "@src/shared/ui";
import coinIcon from "@src/shared/assets/icons/coin_icon.png";

const numFormat = (num: number) => {
  const parts = num.toString().split(/[,\.]/);

  return parts[0]
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1\u00A0") // u00A0 - non-breaking space
    .concat(parts[1] ? "." : "")
    .concat(parts?.[1] || "");
};

type TradingCapitalProps = {
  className?: string;
};
export const TradingCapital = ({ className }: TradingCapitalProps) => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getTradingCapital);
  const error = useAppSelector(getTradingCapitalError);
  const isError = !!error && error !== "aborted";
  const isLoading = useAppSelector(getTradingCapitalIsLoading);
  const isLoaded = !isLoading && !isError && !!data;
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchTradingCapital({ signal: abortController.signal }));

    return () => abortController.abort();
  }, []);
  const tradingCapital = data
    ? {
        capital: numFormat(data.capital).concat(
          "0".repeat(Math.max(7 - numFormat(data.capital).length, 0)),
        ),
        balance: numFormat(data.balance),
        onHold: numFormat(data.onHold),
        currency: data.currency,
      }
    : {
        capital: "0.00000",
        balance: "00 000",
        onHold: "00 000",
        currency: "XXX",
      };

  return (
    <div
      className={classNames(
        classes.wrapper,
        { [classes.error]: isError },
        { [classes.loaded]: isLoaded },
        className,
      )}
    >
      <span className={classes.text}>Trading capital</span>
      <div className={classes.content}>
        <div className={classes.capital}>
          <span className={classes.amount}>{tradingCapital.capital}</span>
          <span>{tradingCapital.currency}</span>
        </div>
        <div className={classes.balance}>
          <span className={classes.coins}>
            <span className={classes.text}>Balance:</span>
            <span className={classes.coinsAmount}>
              <span className={classes.amount}>{tradingCapital.balance}</span>
              <Icon type="img" size={12} alt="coin" src={coinIcon} />
            </span>
          </span>
          <span className={classes.coins}>
            <span className={classes.text}>On hold:</span>
            <span className={classes.coinsAmount}>
              <span className={classes.amount}>{tradingCapital.onHold}</span>
              <Icon type="img" size={12} alt="coin" src={coinIcon} />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
