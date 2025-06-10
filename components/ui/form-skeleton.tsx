import { cn } from "@/lib/utils";

interface FormSkeletonProps {
  className?: string;
  fieldCount?: number;
}

export function FormSkeleton({ className, fieldCount = 4 }: FormSkeletonProps) {
  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: fieldCount }).map((_, index) => (
        <div key={index} className="space-y-2">
          <div className="h-4 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-10 w-full bg-gray-200 rounded animate-pulse" />
        </div>
      ))}
      <div className="h-10 w-full bg-gray-200 rounded animate-pulse mt-6" />
    </div>
  );
} 