import classNames from "classnames";
import classes from "./PageHeader.module.scss";
import { RoutePath, RoutePathToTitle } from "@src/entities/Router";
import { useLocation } from "react-router";
import { Icon } from "@src/shared/ui/Icon";

import menuIcon from "@src/shared/assets/icons/menu_icon.png";
import refreshIcon from "@src/shared/assets/icons/refresh_icon.png";
import { SideMenu } from "@src/features/SideMenu";
import { useState } from "react";

type PageHeaderProps = {
  className?: string;
  onRefresh?: () => void;
};
export const PageHeader = ({ className, onRefresh }: PageHeaderProps) => {
  const { pathname } = useLocation();
  const header = RoutePathToTitle[pathname as RoutePath];
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const onSideMenuClose = () => {
    setIsSideMenuOpen(false);
  };
  const handleMenuClick = () => {
    setIsSideMenuOpen(true);
  };
  return (
    <div className={classNames(classes.wrapper, className)}>
      <SideMenu isOpen={isSideMenuOpen} onClose={onSideMenuClose} />
      <button onClick={handleMenuClick}>
        <Icon type="img" src={menuIcon} />
      </button>
      <h1 className={classes.title}>{header}</h1>
      <button onClick={onRefresh}>
        <Icon type="img" src={refreshIcon} />
      </button>
    </div>
  );
};
