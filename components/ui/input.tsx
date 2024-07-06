import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md !border-0 !ring-0 border-gray-200 shadow-[inset_0_-1.5px_0_0] shadow-gray-400/30 dark:shadow-gray-500/30 focus:shadow-primary-700/50 dark:focus:shadow-darkPrimary-400/50 bg-gray-100/90 px-3 py-2 text-sm file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-200/5 dark:text-gray-500 dark:placeholder:text-gray-600",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
