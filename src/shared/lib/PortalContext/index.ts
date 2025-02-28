import { createContext, RefObject, useContext } from "react";

export const PortalContext = createContext<RefObject<HTMLDivElement | null> | null>(
  null,
);

export const usePortal = () => useContext(PortalContext);
