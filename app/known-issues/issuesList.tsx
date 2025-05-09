import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getTimePassed } from "@/utils/dateUtils";
import { Info, AlertCircle, AlertTriangle, XCircle } from "lucide-react";

type Severity = "low" | "medium" | "high" | "critical";

type IssueItemProps = {
  date: string;
  title: string;
  description: React.ReactNode;
  issueLink: string;
  severity?: Severity;
  screenshot?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const IssueList: React.FC<IssueItemProps> = ({
  date,
  title,
  description,
  severity,
  screenshot,
}) => {
  const getSeverityIcon = () => {
    if (!severity) return null;
    switch (severity) {
      case "low":
        return <Info className="h-6 w-6 text-blue-500" />;
      case "medium":
        return <AlertCircle className="h-6 w-6 text-yellow-500" />;
      case "high":
        return <AlertTriangle className="h-6 w-6 text-orange-500" />;
      case "critical":
        return <XCircle className="h-6 w-6 text-red-600" />;
      default:
        return <Info className="h-6 w-6 text-gray-500" />;
    }
  };

  const getSeverityLabel = () => {
    if (!severity) return "Severity Unknown";
    switch (severity) {
      case "low":
        return "Low Severity";
      case "medium":
        return "Medium Severity";
      case "high":
        return "High Severity";
      case "critical":
        return "Critical Severity";
      default:
        return "Severity Unknown";
    }
  };

  return (
    <article className="mb-8 w-full max-w-full">
      <div className="bg-white flex flex-col rounded-lg border border-gray-200 p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          {/* Icon and Title */}
          <div className="flex items-center">
            {/* Icon */}
            {severity && <div className="mr-3">{getSeverityIcon()}</div>}
            {/* Issue Title */}
            <h3 className="text-xl font-bold text-gray-900">
              <p>{title}</p>
            </h3>
          </div>

          {/* Date */}
          {date && (
            <div className="mt-2 text-sm text-gray-500 sm:mt-0">
              <time dateTime={date}>{date}</time>
              <span className="ml-2">({getTimePassed(date)})</span>
            </div>
          )}
        </div>
        {/* Severity Label */}
        {severity && (
          <div className="mt-2">
            <span
              className={cn(
                "inline-block rounded-full px-3 py-1 text-sm font-semibold",
                severity === "low" && "bg-blue-100 text-blue-800",
                severity === "medium" && "bg-yellow-100 text-yellow-800",
                severity === "high" && "bg-orange-100 text-orange-800",
                severity === "critical" && "bg-red-100 text-red-800",
              )}
            >
              {getSeverityLabel()}
            </span>
          </div>
        )}
        {/* Description */}
        <div className="mt-4 text-gray-700">{description}</div>
        {/* Screenshot */}
        {screenshot && (
          <div className="mt-4">
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={screenshot.width}
              height={screenshot.height}
              className="h-auto w-full rounded-md border"
            />
          </div>
        )}
      </div>
    </article>
  );
};
