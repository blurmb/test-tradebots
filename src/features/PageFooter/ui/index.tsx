import classNames from "classnames";
import classes from "./PageFooter.module.scss";
import {
  RoutePath,
  RoutePaths,
  RoutePathToTitle,
} from "@src/entities/Router/model/paths";
import { AppLink, RouteIcon } from "@src/entities/Router";
import { useLocation } from "react-router";

type PageFooterProps = {
  className?: string;
};
const paths = Object.values(RoutePaths);
export const PageFooter = ({ className }: PageFooterProps) => {
  const { pathname } = useLocation();

  return (
    <nav className={classNames(classes.wrapper, className)}>
      {paths.map((path) => (
        <AppLink
          key={path}
          to={path}
          className={classNames(classes.link, {
            [classes.selected]: pathname === path,
          })}
        >
          <IconWithBadge path={path} />
          <span className={classes.title}>{RoutePathToTitle[path]}</span>
        </AppLink>
      ))}
    </nav>
  );
};

type IconProps = {
  path: RoutePath;
};
const IconWithBadge = ({ path }: IconProps) => {
  const notificationsCount = 3;
  return (
    <div className={classes.icon}>
      <RouteIcon size={22} path={path} />
      {notificationsCount > 0 && (
        <div className={classes.badge}>{notificationsCount}</div>
      )}
    </div>
  );
};
