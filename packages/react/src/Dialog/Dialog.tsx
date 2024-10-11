import { Dialog as DialogPrimitive, DialogPanel, DialogProps } from '@headlessui/react'
import { FC, forwardRef } from 'react'

export const Dialog = forwardRef<HTMLDivElement, DialogProps>(({ open, children, ...props }, ref) => {
  return (
    <DialogPrimitive ref={ref} open={open} as="div" className="relative z-10 focus:outline-none" {...props}>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-background/20 backdrop-blur-sm">
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel
            transition
            className="w-full max-w-md rounded bg-foreground p-6 backdrop-blur-2xl duration-100 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
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