import { Card } from "@verysimple/react";
import OsCard, { OsCardProps } from "../OsCard";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import classNames from "classnames";
import { FC } from "react";

export interface BrowserCardProps extends OsCardProps {
  url: string;
}

const BrowserCard: FC<BrowserCardProps> = ({ className, url, ...props }) => {
  return (
    <OsCard
      className={classNames("", className)}
      toolbarSlot={
        <Card className="hidden md:flex  ml-20 items-center w-full pl-3 py-1 justify-between truncate st-bg-secondary overflow-hidden text-ellipsis">
          <div className="text-sm text-zinc-600 dark:text-white text-ellipsis overflow-hidden">
            {url}
          </div>
          <ArrowPathIcon className="h-4 w-4 text-zinc-500 dark:text-white mx-5" />
        </Card>
      }
      {...props}
    />
  );
};

export default BrowserCard;
