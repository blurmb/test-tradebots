type FakeFetchProps<T> = {
  data: T;
  delay?: number;
  errorProbability?: number;
  signal?: AbortSignal;
};
export const fakeFetch = <T>({
  data,
  delay = 1000,
  errorProbability = 0,
  signal,
}: FakeFetchProps<T>) =>
  new Promise<T>((resolve, reject) => {
    const onAbort = () => {
      reject("aborted");
    };
    signal?.addEventListener("abort", onAbort, { once: true });
    setTimeout(() => {
      signal?.removeEventListener("abort", onAbort);
      if (errorProbability > Math.random()) {
        reject(new Error("error"));
      }
      resolve(data);
    }, delay);
  });
