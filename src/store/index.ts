import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  notificationsSlice,
  NotificationsState,
} from "@src/entities/Notification";
import { timeRangeSlice } from "@src/features/TimeRangeSelector";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {
  notifications: NotificationsState;
  timeRange: string;
}
export const store = configureStore<StateSchema>({
  reducer: {
    notifications: notificationsSlice.reducer,
    timeRange: timeRangeSlice.reducer,
  },
});
