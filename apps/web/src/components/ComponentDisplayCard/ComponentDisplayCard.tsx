import { Card } from "@verysimple/react";
import classNames from "classnames";

const ComponentDisplayCard: React.FC<any> = ({ className, children }) => {
  return (
    <Card
      className={classNames(
        "bg-background text-black dark:text-white flex flex-col items-center justify-center h-48 gap-3",
        className
      )}
    >
      {children}
    </Card>
  );
};

export default ComponentDisplayCard;
