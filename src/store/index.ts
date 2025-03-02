import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  notificationsSlice,
  NotificationsState,
} from "@src/entities/Notification";
import {
  botSelectionSlice,
  BotSelectionState,
} from "@src/features/botSelection";
import { TimeRange, timeRangeSlice } from "@src/features/TimeRangeSelector";
import {
  tradingCapitalSlice,
  TradingCapitalState,
} from "@src/features/TradingCapital/model/slice";
import { botListSlice, BotListState } from "@src/widgets/BotList/";
import {
  botProfitChartSlice,
  BotProfitChartState,
} from "@src/widgets/BotProfitChart";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {
  notifications: NotificationsState;
  timeRange: TimeRange;
  tradingCapital: TradingCapitalState;
  botList: BotListState;
  botSelection: BotSelectionState;
  botProfitChart: BotProfitChartState;
}
export const store = configureStore<StateSchema>({
  reducer: {
    notifications: notificationsSlice.reducer,
    timeRange: timeRangeSlice.reducer,
    tradingCapital: tradingCapitalSlice.reducer,
    botList: botListSlice.reducer,
    botSelection: botSelectionSlice.reducer,
    botProfitChart: botProfitChartSlice.reducer,
  },
});
