import { Button, ButtonProps } from "@verysimple/react";
import { Square2StackIcon, CheckIcon } from "@heroicons/react/24/outline";
import useClipboard from "@/lib/useClipboard";
import classNames from "classnames";
import { useState } from "react";

export interface CopyToClipboardButtonProps extends ButtonProps {
  text: string;
}

const CopyToClipboardButton = ({
  text,
  size = "md",
  ...props
}: CopyToClipboardButtonProps) => {
  const { onCopy, isCopied } = useClipboard();
  const [showLoading, setShowLoading] = useState(false);

  const IconComponent = isCopied ? CheckIcon : Square2StackIcon;

  const handleClick = () => {
    setShowLoading(true);
    onCopy(text);
    props.onClick?.();
    setTimeout(() => {
      setShowLoading(false);
    }, 10);
  }

  return (
    <Button
      {...props}
      size={size}
      onClick={handleClick}
    >
      {text}
      {showLoading ? (
        <span className={classNames("ml-2", {
          "h-3 w-3": size === "xs",
          "h-4 w-4": size === "sm",
          "h-5 w-5": size === "md",
          "h-6 w-6": size === "lg",
        })} />
      ) : (
        <IconComponent
          className={classNames("ml-2", {
            "h-3 w-3": size === "xs",
            "h-4 w-4": size === "sm",
            "h-5 w-5": size === "md",
            "h-6 w-6": size === "lg",
          })}
        />
      )}
    </Button>
  );
};

export default CopyToClipboardButton;
