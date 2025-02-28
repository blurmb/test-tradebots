import { createSelector } from "@reduxjs/toolkit";
import { StateSchema } from "@src/store";

export const getNotifications = (state: StateSchema) =>
  state.notifications.data;

export const getNotificationsCount = createSelector(
  getNotifications,
  (notifications) => notifications.length,
);

export const getNotificationsForSection = createSelector(
  [getNotifications, (_, section: string) => section],
  (notifications, section) =>
    notifications.filter((notification) => notification.section === section),
);
