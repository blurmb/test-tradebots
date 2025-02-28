import { Link, LinkProps } from "react-router";
import { RoutePath } from "../../model/paths";

type AppLinkProps = {
  to: RoutePath;
} & Omit<LinkProps, "to">;
export const AppLink = ({
  className,
  to,
  children,
  ...props
}: AppLinkProps) => {
  return (
    <Link className={className} to={to} {...props}>
      {children}
    </Link>
  );
};
