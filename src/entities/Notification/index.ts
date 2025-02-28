export { notificationsSlice } from "./model/slice";
export type { Notification, NotificationsState } from "./model/slice";
export {
  getNotifications,
  getNotificationsCount,
  getNotificationsForSection,
} from "./model/selectors";
