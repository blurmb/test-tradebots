import { createSlice } from "@reduxjs/toolkit";
import { fetchTradingCapital } from "./thunk/fetchTradingCapital";

export type TradingCapital = {
  capital: number;
  balance: number;
  onHold: number;
  currency: string;
};
export type TradingCapitalState = {
  data?: TradingCapital;
  error?: string;
  isLoading: boolean;
};

const initialState: TradingCapitalState = {
  isLoading: false,
};

export const tradingCapitalSlice = createSlice({
  name: "tradingCapital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTradingCapital.pending, (state) => {
      state.data = undefined;
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchTradingCapital.fulfilled, (state, action) => {
      state.data = action.payload;
      state.error = undefined;
      state.isLoading = false;
    });
    builder.addCase(fetchTradingCapital.rejected, (state, action) => {
      state.data = undefined;
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
