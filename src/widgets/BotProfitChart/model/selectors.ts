import { RootState } from "@src/store";

export const getBotProfitChartData = (state: RootState) =>
  state.botProfitChart.data;

export const getBotProfitChartIsLoading = (state: RootState) =>
  state.botProfitChart.isLoading;

export const getBotProfitChartError = (state: RootState) =>
  state.botProfitChart.error;
