import { createSlice } from "@reduxjs/toolkit";
import { Bot } from "@src/entities/Bot";
import { fetchBotList } from "./thunk/fetchBotList";

export type BotListState = {
  bots: Bot[];
  isLoading: boolean;
  error?: string;
};

const initialState: BotListState = {
  bots: [],
  isLoading: false,
};

export const botListSlice = createSlice({
  name: "botList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBotList.pending, (state) => {
        state.isLoading = true;
        state.error = undefined;
      })
      .addCase(fetchBotList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bots = action.payload;
        state.error = undefined;
      })
      .addCase(fetchBotList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
