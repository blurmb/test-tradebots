import { PortalContext } from "@src/shared/lib";
import { ReactNode, useRef } from "react";

interface ProtalProviderProps {
  children: ReactNode;
}
export const PortalProvider = ({ children }: ProtalProviderProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <PortalContext.Provider value={ref}>
      {children}
      <div ref={ref} />
    </PortalContext.Provider>
  );
};
