import { createAsyncThunk } from "@reduxjs/toolkit";
import { Bot } from "@src/entities/Bot";
import { botListApi } from "../../api";

export const fetchBotList = createAsyncThunk<
  Bot[],
  { signal?: AbortSignal },
  { rejectValue: string }
>("botList/fetchBotList", async ({ signal }, { rejectWithValue }) => {
  try {
    return (await botListApi.getBotList(signal)).data;
  } catch (e) {
    return rejectWithValue(e === "aborted" ? "aborted" : "error");
  }
});
