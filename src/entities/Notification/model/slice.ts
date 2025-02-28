import { createSlice } from "@reduxjs/toolkit";
import { RoutePath, RoutePaths } from "@src/entities/Router";

export interface Notification {
  id: number;
  section: RoutePath;
  message: string;
}

export interface NotificationsState {
  data: Notification[];
}

const initialState: NotificationsState = {
  data: [
    {
      id: 1,
      section: RoutePaths.Profile,
      message: "",
    },
    {
      id: 2,
      section: RoutePaths.Profile,
      message: "",
    },
    {
      id: 3,
      section: RoutePaths.Profile,
      message: "",
    },
  ],
};

export const notificationsSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {},
});
