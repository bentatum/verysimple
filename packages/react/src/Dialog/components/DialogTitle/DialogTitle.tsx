import { Dialog as UIDialog } from "@headlessui/react";
import { FC, forwardRef, ReactNode } from "react";
import classNames from "classnames";
import type { $ElementProps } from "@/types";

export type DialogTitleProps = $ElementProps<typeof UIDialog.Title> & {
  icon?: ReactNode;
  loose?: boolean;
};

export const DialogTitle: FC<DialogTitleProps> = forwardRef<
  HTMLHeadingElement,
  DialogTitleProps
>(({ icon, className = "", children, loose, ...props }, ref) => {
  return (
    <UIDialog.Title
      {...props}
      ref={ref}
      className={classNames(
        "font-display font-bold text-2xl pt-6 px-6",
        {
          "flex items-center": Boolean(icon),
          "whitespace-nowrap": !className.match(/whitespace-/),
          "mb-8": !loose,
          "mb-14": loose,
        },
        className
      )}
    >
      <>
        {icon && <div className="mr-3">{icon}</div>}
        {children}
      </>
    </UIDialog.Title>
  );
});

DialogTitle.displayName = "DialogTitle";

export default DialogTitle;
