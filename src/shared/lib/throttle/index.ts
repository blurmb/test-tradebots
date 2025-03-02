type ThrottledFunction<T extends (...args: any[]) => any> = (
  ...args: Parameters<T>
) => void;

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ThrottledFunction<T> {
  let lastFunc: ReturnType<typeof setTimeout>;
  let lastRan: number;

  return function (...args: Parameters<T>) {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) {
        clearTimeout(lastFunc);
      }
      lastFunc = setTimeout(
        () => {
          func(...args);
          lastRan = Date.now();
          clearTimeout(lastFunc);
        },
        limit - (Date.now() - lastRan),
      );
    }
  };
}
