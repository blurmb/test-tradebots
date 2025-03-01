import classNames from "classnames";
import classes from "./Chip.module.scss";

type ChipProps = {
  children?: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
};
export const Chip = ({ children, isActive=false, onClick, className }: ChipProps) => {
  return (
    <button onClick={onClick} className={classNames(classes.chip, { [classes.active]: isActive }, className)}>
      {children}
    </button>
  );
};
