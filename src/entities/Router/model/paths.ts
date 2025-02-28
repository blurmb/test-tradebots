export const RoutePaths = {
  Dashboard: "/",
  Megabot: "/megabot",
  Market: "/market",
  Prices: "/prices",
  Profile: "/profile",
} as const;

export type RoutePath = (typeof RoutePaths)[keyof typeof RoutePaths];

export const RoutePathToTitle: Record<RoutePath, string> = {
  [RoutePaths.Dashboard]: "Dashboard",
  [RoutePaths.Megabot]: "Megabot",
  [RoutePaths.Market]: "Market",
  [RoutePaths.Prices]: "Prices",
  [RoutePaths.Profile]: "Profile",
} as const;
