import { RefObject, ReactNode, useContext, Context } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  element?: HTMLElement;
  context: RefObject<HTMLDivElement | null> | null;
}

export const Portal = ({ children, element, context }: PortalProps) => {
  return createPortal(children, element ?? context?.current ?? document.body);
};
