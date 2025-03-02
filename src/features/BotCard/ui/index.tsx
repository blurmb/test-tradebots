import classNames from "classnames";
import classes from "./BotCard.module.scss";
import { Icon } from "@src/shared/ui";
import yellowBotIcon from "@src/shared/assets/icons/bots/yellow_bot_icon.png";
import whiteBotIcon from "@src/shared/assets/icons/bots/white_bot_icon.png";
import greenBotIcon from "@src/shared/assets/icons/bots/green_bot_icon.png";
import blueBotIcon from "@src/shared/assets/icons/bots/blue_bot_icon.png";
import redBotIcon from "@src/shared/assets/icons/bots/red_bot_icon.png";
import orangeBotIcon from "@src/shared/assets/icons/bots/orange_bot_icon.png";
import defaultIcon from "@src/shared/assets/icons/bots/default_bot_icon.png";

const nameToIcon: Record<string, string> = {
  yellow_bot: yellowBotIcon,
  white_bot: whiteBotIcon,
  green_bot: greenBotIcon,
  blue_bot: blueBotIcon,
  red_bot: redBotIcon,
  orange_bot: orangeBotIcon,
};

type BotCardProps = {
  name: string;
  profit?: number;
  selected?: boolean;
  className?: string;
};
export const BotCard = ({
  name,
  profit,
  className,
  selected = false,
}: BotCardProps) => (
  <div
    className={classNames(
      classes.wrapper,
      { [classes.selected]: selected },
      className,
    )}
  >
    <div className={classes.content}>
      <Icon
        type="img"
        src={nameToIcon[name] ?? defaultIcon}
        size={50}
        alt={`${name} icon`}
      />
      <div className={classes.name}>{name}</div>
      {profit && (
        <div
          className={classNames(
            classes.profit,
            { [classes.positive]: profit > 0 },
            { [classes.negative]: profit < 0 },
          )}
        >
          {Math.abs(profit)}
        </div>
      )}
    </div>
  </div>
);
