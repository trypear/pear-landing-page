import React from "react";
import issues from "./issues";
import { IssueList } from "./issuesList";
import { Metadata } from "next";
import { constructMetadata } from "@/lib/utils";

export const metadata: Metadata = constructMetadata({
  title: "Issues",
  description: "This page lists all current known issues and their status.",
  canonical: "/known-issues",
});

const CurrentKnownIssues: React.FC = () => {
  return (
    <div className="mx-auto mb-32 mt-36 min-h-screen w-full max-w-3xl overflow-hidden px-10">
      <h1 className="mb-12 text-center text-4xl font-extrabold text-primary-700">
        Current Known Issues
      </h1>
      <main>
        {issues.map(
          (issue, index) => {
            return <IssueList key={index} {...issue} />
          },
        )}
      </main>
    </div>
  );
};

export default CurrentKnownIssues;
