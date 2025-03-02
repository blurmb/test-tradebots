import { fakeFetch } from "@src/shared/lib/fakeFetch";
import { DataType } from "../slice";
import { TimeRange } from "@src/features/TimeRangeSelector";

export const botProfitChartApi = {
  fetchBotProfit: (
    timeRange: TimeRange,
    signal: AbortSignal,
    botId?: string,
  ) => {
    return fakeFetch<DataType[]>({
      signal,
      delay: 0,
      data: generaTeData(timeRange),
    });
  },
};

const generaTeData = (timeRange: TimeRange): DataType[] => {
  const dataCount = 9;

  switch (timeRange) {
    case "24h":
      return Array.from({ length: dataCount }, (_, index) => ({
        time: `${index + 10}:00`,
        profit: generateProfit(),
      }));
    case "7d":
      return Array.from({ length: dataCount }, (_, index) => ({
        time: `${index + 1}.02`,
        profit: generateProfit(),
      }));
    case "30d":
      return Array.from({ length: dataCount }, (_, index) => ({
        time: `${index * 3 + 1}.01`,
        profit: generateProfit(),
      }));
    case "all_time":
      return Array.from({ length: dataCount }, (_, index) => ({
        time: `${index + 1}.24`,
        profit: generateProfit(),
      }));
  }
};

const generateProfit = () => {
  return Math.floor(Math.random() * 150 - 50);
};
