import { Dialog as DialogPrimitive, DialogPanel, DialogProps as DialogPrimitiveProps, DialogPanelProps } from '@headlessui/react'
import clsx from 'clsx';
import { forwardRef } from 'react'

export interface DialogProps extends DialogPrimitiveProps {
  panelProps?: DialogPanelProps;
}

const shouldRenderClass = (className: string | undefined, regex: string) => {
  return typeof className === 'string' ? !className.match(new RegExp(`(^|\\s)${regex}`)) : true;
};

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(({ open, children, panelProps, ...props }, ref) => {
  return (
    <DialogPrimitive ref={ref} open={open} as="div" className="relative z-10 focus:outline-none" {...props}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-background/20 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            {...panelProps}
            className={clsx(
              "duration-100 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0", {
              'p-6': shouldRenderClass(panelProps?.className as string, 'p-'),
              'bg-foreground': shouldRenderClass(panelProps?.className as string, 'bg-'),
              'rounded': shouldRenderClass(panelProps?.className as string, 'rounded-'),
              'w-full max-w-md': shouldRenderClass(panelProps?.className as string, 'max-w-|w-'),
            }, panelProps?.className)}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </DialogPrimitive>
  )
})

Dialog.displayName = "Dialog";

export default Dialog;