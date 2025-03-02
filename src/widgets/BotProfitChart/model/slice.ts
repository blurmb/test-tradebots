import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchBotProfit } from "./thunk/fetchBotProfit";

export type DataType = {
  time: string;
  profit: number;
};
export type BotProfitChartState = {
  data: DataType[];
  isLoading: boolean;
  error?: string;
};

const initialState: BotProfitChartState = {
  data: [],
  isLoading: false,
};

export const botProfitChartSlice = createSlice({
  name: "botProfitChart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBotProfit.pending, (state) => {
        state.data = [];
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(
        fetchBotProfit.fulfilled,
        (state, action: PayloadAction<DataType[]>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.error = undefined;
        },
      )
      .addCase(
        fetchBotProfit.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.isLoading = false;
          state.error = action.payload;
        },
      );
  },
});
