import { createSelector } from "@reduxjs/toolkit";
import { TimeRange } from "@src/features/TimeRangeSelector";
import { RootState } from "@src/store";

export const getBotList = (state: RootState) => state.botList.bots;

export const getBotListIsLoading = (state: RootState) =>
  state.botList.isLoading;

export const getBotListError = (state: RootState) => state.botList.error;

export const getBotListStatsForPeriod = createSelector(
  [getBotList, (_, period: TimeRange) => period],
  (bots, period) =>
    bots.map((bot) => ({
      name: bot.name,
      profit: bot[period],
    })),
);
