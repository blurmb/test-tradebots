import { fakeFetch } from "@src/shared/lib/fakeFetch";

export type TradingCapitalApiResponse = {
  data: {
    trading_capital: number;
    trading_capital_currency: string;
    balance: number;
    on_hold: number;
  };
};
export const tradingCapitalApi = {
  getTradingCapital: (signal?: AbortSignal) =>
    fakeFetch<TradingCapitalApiResponse>({
      data: {
        data: {
          trading_capital: 3.081,
          trading_capital_currency: "eth",
          balance: 14630,
          on_hold: 8300,
        },
      },
      signal,
      // errorProbability: 1,
    }),
};
