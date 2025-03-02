import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";
import { throttle } from "../throttle";

type PersistedSliceConfig = {
  storageKey?: string;
  throttleTime?: number;
};

const loadState = (storageKey: string) => {
  try {
    const serializedState = localStorage.getItem(storageKey);
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    console.error(`Error loading state for "${storageKey}":`, error);
    return undefined;
  }
};

const saveState = (storageKey: string, state: any) => {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state));
  } catch (error) {
    console.error(`Error saving state for "${storageKey}":`, error);
  }
};

export const createPersistedSlice = (
  createSliceConfig: CreateSliceOptions,
  config: PersistedSliceConfig = {},
) => {
  const { storageKey = "slice-" + createSliceConfig.name, throttleTime = 100 } =
    config;
  const throttledSaveState = throttle(saveState, throttleTime);
  const initial = loadState(storageKey) ?? createSliceConfig.initialState;

  const slice = createSlice({
    ...createSliceConfig,
    initialState: initial,
  });

  const originalReducer = slice.reducer;

  const persistedReducer: typeof originalReducer = (state, action) => {
    const newState = originalReducer(state, action);

    if (state !== newState) {
      throttledSaveState(storageKey, newState);
    }

    return newState;
  };

  return {
    ...slice,
    reducer: persistedReducer,
  };
};
