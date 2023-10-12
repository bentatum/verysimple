import classNames from "classnames";
import { Dialog as UIDialog } from "@headlessui/react";
import { forwardRef } from "react";
import type { $ElementProps } from "@/types";

export type DialogContentProps = $ElementProps<typeof UIDialog.Description> & {
  loose?: boolean;
};

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  ({ className = "", loose, ...props }, ref) => {
    const userpb = className.match(/pb-/);
    return (
      <UIDialog.Description
        as="div"
        {...props}
        ref={ref}
        className={classNames(
          "px-6 text-base",
          {
            "pb-8": !userpb && !loose,
            "pb-14": !userpb && loose,
          },
          className
        )}
      />
    );
  }
);

DialogContent.displayName = "DialogContent";

export default DialogContent;
