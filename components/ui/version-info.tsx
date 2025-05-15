"use client";
import React, { Fragment } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ReleaseInfo } from "@/types/releaseTypes";

interface VersionInfoProps {
  dynamicVersions: Record<string, ReleaseInfo>;
}

export default function VersionInfo({ dynamicVersions }: VersionInfoProps) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={50}>
        <TooltipTrigger asChild>
          <div className="ml-2 mr-auto text-sm text-gray-500">
            <span className="underline">Version info</span>
          </div>
        </TooltipTrigger>
        <TooltipContent side="top" className="flex flex-col space-y-2 p-3">
          <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-2 text-sm">
            {Object.entries(dynamicVersions).map(([platform, info]) => {
              return (
                <Fragment key={platform}>
                  <span className="font-medium">{platform}:</span>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1">
                      <div>{info.version}</div>
                      {info.releaseDate && (
                        <div className="text-xs text-gray-400">
                          ({info.releaseDate})
                        </div>
                      )}
                    </div>
                    {platform === "Linux" && (
                      <div className="text-xs text-gray-400">
                        *Packaged and released
                        <br />
                        by the open source community
                      </div>
                    )}
                  </div>
                </Fragment>
              );
            })}
            <Link
              href="/changelog"
              className="col-span-2 text-center text-primary-700 hover:text-primary-600"
            >
              Changelog
            </Link>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
