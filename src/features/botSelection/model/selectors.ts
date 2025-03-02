import { RootState } from "@src/store";

export const getSelectedBot = (state: RootState) =>
  state.botSelection.selectedBot;
