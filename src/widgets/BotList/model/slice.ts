import { createSlice } from "@reduxjs/toolkit";
import { Bot } from "@src/entities/Bot";

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
});
