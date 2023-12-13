import { Card, CardProps } from "@verysimple/react";
import classNames from "classnames";
import { FC } from "react";

export interface OsCardProps extends CardProps {
  toolbarSlot?: React.ReactNode;
  preventScrolling?: boolean;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

const OsCard: FC<OsCardProps> = ({
  children,
  toolbarSlot,
  className,
  preventScrolling,
  containerProps,
  ...props
}) => {
  return (
    <Card
      {...props}
      className={classNames(
        "text-left shadow-md rounded st-bg-secondary overflow-hidden",
        className
      )}
    >
      <div className="sticky top-0 st-bg-primary">
        <div className="h-10 relative flex items-center py-2 px-3">
          <div className="absolute left-4 flex space-x-2 mr-5">
            <div className="h-3 w-3 bg-red-500 rounded-full"></div>
            <div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
            <div className="h-3 w-3 bg-green-400 rounded-full"></div>
          </div>
          {toolbarSlot}
        </div>
      </div>
      <div
        {...containerProps}
        className={classNames("overflow-x-hidden st-bg-secondary", {
          "overflow-y-auto": !preventScrolling,
          "overflow-y-hidden": preventScrolling,
          "max-h-96": !containerProps?.className?.includes("max-h"),
        })}
      >
        {children}
      </div>
    </Card>
  );
};

export default OsCard;
