import { createAsyncThunk } from "@reduxjs/toolkit";
import { DataType } from "../slice";
import { TimeRange } from "@src/features/TimeRangeSelector";
import { botProfitChartApi } from "../api";

export type FetchBotProfitArgs = {
  botId?: string;
  timeRange: TimeRange;
  signal: AbortSignal;
};
export const fetchBotProfit = createAsyncThunk<
  DataType[],
  FetchBotProfitArgs,
  { rejectValue: string }
>(
  "botProfitChart/fetchBotProfit",
  async ({ botId, timeRange, signal }, { rejectWithValue }) => {
    try {
      return await botProfitChartApi.fetchBotProfit(
        timeRange,
        signal,
        botId,
      );
    } catch (error) {
      return rejectWithValue(error === "aborted" ? "aborted" : "error");
    }
  },
);
