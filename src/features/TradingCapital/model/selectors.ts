import { RootState } from "@src/store";

export const getTradingCapital = (state: RootState) =>
  state.tradingCapital.data;

export const getTradingCapitalError = (state: RootState) =>
  state.tradingCapital.error;

export const getTradingCapitalIsLoading = (state: RootState) =>
  state.tradingCapital.isLoading;
