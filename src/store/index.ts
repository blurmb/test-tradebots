import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import {
  notificationsSlice,
  NotificationsState,
} from "@src/entities/Notification";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppReducers = ReducersMapObject<StateSchema>;
export type StateSchemaKey = keyof StateSchema;

export interface StateSchema {
  notifications: NotificationsState;
}
export const store = configureStore({
  reducer: {
    notifications: notificationsSlice.reducer,
  },
});
