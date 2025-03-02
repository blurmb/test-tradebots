import { createSlice } from "@reduxjs/toolkit";

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
});
