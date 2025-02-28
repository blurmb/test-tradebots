import { RoutePath, RoutePaths, RoutePathToTitle } from "../../model/paths";

import dashboardIcon from "./icons/dashboard_icon.png";
import megabotIcon from "./icons/megabot_icon.png";
import marketIcon from "./icons/market_icon.png";
import pricesIcon from "./icons/coin_prices_icon.png";
import profileIcon from "./icons/profile_icon.png";
import { Icon } from "@src/shared/ui/Icon";

type RouteIconProps = {
  path: RoutePath;
  size?: number;
};

const icons = {
  [RoutePaths.Dashboard]: dashboardIcon,
  [RoutePaths.Megabot]: megabotIcon,
  [RoutePaths.Market]: marketIcon,
  [RoutePaths.Prices]: pricesIcon,
  [RoutePaths.Profile]: profileIcon,
};

export const RouteIcon = ({ path, size = 22 }: RouteIconProps) => {
  return (
    <Icon
      type="img"
      src={icons[path]}
      size={size}
      alt={`${RoutePathToTitle[path]} icon`}
    />
  );
};
