import { createPersistedSlice } from "@src/shared/lib";

export const TimeRanges = ["24h", "7d", "30d", "all"] as const;
export type TimeRange = (typeof TimeRanges)[number];
export const TimeRangeToLabel: { [key in TimeRange]: string } = {
  "24h": "24h",
  "7d": "7 days",
  "30d": "30 days",
  all: "All time",
};

const initialState: TimeRange = "24h";

export const timeRangeSlice = createPersistedSlice({
  name: "timeRange",
  initialState,
  reducers: {
    setTimeRange: (_, action) => action.payload,
  },
});

export const { setTimeRange } = timeRangeSlice.actions;
