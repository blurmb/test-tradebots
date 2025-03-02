import { createAsyncThunk } from "@reduxjs/toolkit";
import { TradingCapital } from "../slice";
import { tradingCapitalApi } from "../../api";

export const fetchTradingCapital = createAsyncThunk<
  TradingCapital,
  { signal?: AbortSignal },
  { rejectValue: string }
>(
  "tradingCapital/fetchTradingCapital",
  async ({ signal }, { rejectWithValue }) => {
    try {
      const response = await tradingCapitalApi.getTradingCapital(signal);
      return {
        capital: response.data.trading_capital,
        balance: response.data.balance,
        onHold: response.data.on_hold,
        currency: response.data.trading_capital_currency,
      };
    } catch (e) {
      return rejectWithValue(e === "aborted" ? "aborted" : "error");
    }
  },
);
