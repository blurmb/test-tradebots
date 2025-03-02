import { RoutePath, RoutePaths, RoutePathToTitle } from "../../model/paths";

import dashboardIcon from "@src/shared/assets/icons/route/dashboard_icon.png";
import megabotIcon from "@src/shared/assets/icons/route/megabot_icon.png";
import marketIcon from "@src/shared/assets/icons/route/market_icon.png";
import pricesIcon from "@src/shared/assets/icons/route/coin_prices_icon.png";
import profileIcon from "@src/shared/assets/icons/route/profile_icon.png";
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
