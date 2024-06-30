import { cn } from "@/lib/utils";
import { FC } from "react";

interface SpinnerProps {
  className?: string;
}

const Spinner: FC<SpinnerProps> = ({ className, ...props }) => (
  <div
    className={cn(
      "h-4 w-4 animate-spin rounded-full border-2 border-white-main border-t-transparent",
      className,
    )}
    {...props}
  />
);

export default Spinner;
