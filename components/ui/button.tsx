import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Spinner from "./spinner";

const buttonVariants = cva(
  "inline-flex items-center gap-2 justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-primary-800 text-white-main hover:bg-primary-800/80 hover:shadow-sm",
        destructive:
          "rounded-full bg-red-600/90 dark:bg-red-600/70 border border-red-700 dark:border-red-600 text-white-main hover:bg-red-700 hover:shadow-sm",
        outline:
          "rounded-full ring-1 ring-gray-400/40 bg-gray-300/10 hover:bg-gray-300/20 backdrop-blur-md",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        github:
          "rounded-full bg-gray-100 hover:bg-gray-200 border-gray-300 text-white hover:border-gray-400 hover:shadow-sm",
        authgroup:
          "rounded-full text-gray-600 hover:text-gray-700 bg-gray-500/10 hover:bg-gray-500/20 hover:shadow-inset-gray-400-20",
        icon: "rounded-full bg-secondary text-secondary-foreground hover:bg-secondary-300/10",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading,
      children,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <>
            {children}
            {isLoading && <Spinner />}
          </>
        )}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
