import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Bot } from "@src/entities/Bot";

export type BotSelectionState = {
  selectedBot?: Bot;
};
export const botSelectionSlice = createSlice({
  name: "botSelection",
  initialState: {
    selectedBot: undefined,
  } as BotSelectionState,
  reducers: {
    setSelectedBot: (state, action: PayloadAction<Bot>) => {
      state.selectedBot = action.payload;
    },
    resetSelectedBot: (state) => {
      state.selectedBot = undefined;
    },
  },
});

export const { setSelectedBot, resetSelectedBot } = botSelectionSlice.actions;
