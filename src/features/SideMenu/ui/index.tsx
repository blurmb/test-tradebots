import { usePortal } from "@src/shared/lib";
import { Portal } from "@src/shared/ui";

import classes from "./SideMenu.module.scss";
import classNames from "classnames";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

type SideMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};
export const SideMenu = ({ isOpen, onClose }: SideMenuProps) => {
  const portalContext = usePortal();
  const { mounted } = useMount(isOpen);
  const [isOpenForAnimation, setIsOpenForAnimation] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleWrapperClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      contentRef.current &&
      !contentRef.current.contains(e.target as Node) // Проверяем, что клик НЕ по контенту
    ) {
      onClose();
    }
  };
  useEffect(() => {
    if (mounted) {
      setIsOpenForAnimation(isOpen);
    }
  }, [isOpen, mounted]);

  if (!mounted) {
    return null;
  }
  return (
    <Portal context={portalContext}>
      <div
        className={classes.wrapper}
        role="button"
        tabIndex={0}
        onClick={handleWrapperClick}
      >
        <div
          ref={contentRef}
          className={classNames(classes.content, {
            [classes.open]: isOpenForAnimation,
          })}
        >
          <div className={classes.header}>
            <span>Side menu</span>
            <button onClick={onClose}>x</button>
          </div>
          <div className={classes.body}>
            <span>Body</span>
          </div>
        </div>
      </div>
    </Portal>
  );
};

const useMount = (isOpen: boolean) => {
  const ANIMATION_DELAY = 300;
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    let timeOut: ReturnType<typeof setTimeout>;

    if (isOpen && !mounted) {
      timeOut = setTimeout(() => setMounted(true), 0);
    } else if (!isOpen && mounted) {
      timeOut = setTimeout(() => {
        setMounted(false);
      }, ANIMATION_DELAY);
    }
    return () => {
      if (timeOut) {
        clearTimeout(timeOut);
      }
    };
  }, [isOpen]);
  return { mounted };
};
