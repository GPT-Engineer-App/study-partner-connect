import * as React from "react"


import { cn } from "@/lib/utils"

const buttonVariants = {
  default: "bg-orange-500 text-white hover:bg-orange-600",
  outline: "border border-orange-500 text-orange-500 hover:bg-orange-100",
};

export const Button = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "px-4 py-2 rounded-full transition-colors duration-200",
        buttonVariants[variant],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
