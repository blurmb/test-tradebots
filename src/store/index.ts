import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  notificationsSlice,
  NotificationsState,
} from "@src/entities/Notification";
import { timeRangeSlice } from "@src/features/TimeRangeSelector";
import {
  tradingCapitalSlice,
  TradingCapitalState,
} from "@src/features/TradingCapital/model/slice";
import { botListSlice, BotListState } from "@src/widgets/BotList/";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {
  notifications: NotificationsState;
  timeRange: string;
  tradingCapital: TradingCapitalState;
  botList: BotListState;
}
export const store = configureStore<StateSchema>({
  reducer: {
    notifications: notificationsSlice.reducer,
    timeRange: timeRangeSlice.reducer,
    tradingCapital: tradingCapitalSlice.reducer,
    botList: botListSlice.reducer,
  },
});
