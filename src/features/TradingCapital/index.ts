export { tradingCapitalSlice } from "./model/slice";
export type { TradingCapital, TradingCapitalState } from "./model/slice";
export {
  getTradingCapital,
  getTradingCapitalError,
  getTradingCapitalIsLoading,
} from "./model/selectors";
export { fetchTradingCapital } from "./model/thunk/fetchTradingCapital";
